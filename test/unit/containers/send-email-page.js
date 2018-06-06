import proxyquire from 'proxyquire';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';


const sandbox = sinon.createSandbox();

const fetch = sandbox.stub();
const { default: SendEmailPage } = proxyquire('../../../src/js/containers/send-email-page', {
 'node-fetch': fetch
});

describe('send-email-page.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <SendEmailPage
        from={'from@gmail.com'}
        to={'to@gmail.com'}
        cc={'cc@gmail.com'}
        bcc={'bcc@gmail.com'}
        subject={'My subject'}
        text={''}
      />
    )
  })

  afterEach(() => sandbox.reset())

  after(() => sandbox.restore())

  it('should render the page title', () => {
    expect(wrapper.find('FirstSection').props().title).to.eql('Reactor Email Page')
  })

  it('should render the page description', () => {
    expect(wrapper.find('FirstSection').props().description).to.eql('Sending emails like a boss!')
  })

  it('should not render the error message if the form was not submited', () => {
    expect(wrapper.find('.errors-wrapper').length).to.eql(0);
  });

  it('should render the error messages if form is invalid', () => {
    const element = mount(
      <SendEmailPage
        from={'from@gmail.com'}
        to={'to@gmail.com'}
        cc={'cc@gmail.com'}
        bcc={'invalid-email'}
        subject={'My subject'}
        text={'this is a text'}
      />
    )

    expect(element.find('.errors-wrapper').length).to.eql(0);
    element.find('button').simulate('click');
    expect(element.find('.errors-wrapper').length).to.eql(1);
    expect(fetch.callCount).to.eql(0)
  });

  it('should render the error messages if form submition fails', () => {
    fetch.rejects({ message: 'API is out' });
    const element = mount(
      <SendEmailPage
        from={'from@gmail.com'}
        to={'to@gmail.com'}
        cc={'cc@gmail.com'}
        bcc={'invalid-email'}
        subject={'My subject'}
        text={''}
      />
    )
    element.setState({
      from: 'from@gmail.com',
      to: 'to@gmail.com',
      cc: 'cc@gmail.com',
      bcc: 'bcc@gmail.com',
      subject: 'My subject',
      text: '',
    });
    expect(element.find('.errors-wrapper').length).to.eql(0);
    element.find('button').simulate('click');
    expect(element.find('.errors-wrapper').length).to.eql(1);
  });

  it('should not render the error messages if form was submited with success', () => {
    fetch.resolves({ message: 'Message from API'});
    const element = mount(
      <SendEmailPage
        from={'from@gmail.com'}
        to={'to@gmail.com'}
        cc={'cc@gmail.com'}
        bcc={'invalid-email'}
        subject={'My subject'}
        text={'this is a text'}
      />
    )

    const data = {
      from: 'from@gmail.com',
      to: 'to@gmail.com',
      cc: 'cc@gmail.com',
      bcc: 'bcc@gmail.com',
      subject: 'My subject',
      text: 'this is a text',
      apiUrl: 'http://localhost:3000',
    };
    element.setState(data);

    expect(element.find('.errors-wrapper').length).to.eql(0);
    element.find('button').simulate('click');

    expect(element.find('.errors-wrapper').length).to.eql(0);

    const [url, requestOptions] = fetch.firstCall.args;

    expect(url).to.eql(`${data.apiUrl}/v1`);
    expect(requestOptions.body).to.eql(JSON.stringify({
      from: data.from,
      to: [data.to],
      cc: [data.cc],
      bcc: [data.bcc],
      subject: data.subject,
      text: data.text,
    }));
  });
})
