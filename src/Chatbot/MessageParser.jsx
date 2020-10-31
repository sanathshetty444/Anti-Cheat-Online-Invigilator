// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("test time")) {
      this.actionProvider.handleTestTime();
    }

    if (lowerCaseMessage.includes("test subject")) {
      this.actionProvider.handleTestSubject();
    }

    if (lowerCaseMessage.includes("test topics")) {
      this.actionProvider.handleTestSubject();
    }

    if (lowerCaseMessage.includes("time table")) {
      this.actionProvider.handleTestSubject();
    }

    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.handleHelp();
    }
  }
}

export default MessageParser;
