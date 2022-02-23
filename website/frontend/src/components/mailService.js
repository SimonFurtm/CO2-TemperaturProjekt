class MailService extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
  
      fetch('/daten/get', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />
  
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />
  
          <button>Send data Test</button>
        </form>
      );
    }
  }

export default MailService