class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleTestTime=()=>{
    const message = this.createChatBotMessage("10am - 1pm");
    this.updateChatbotState(message);
  }

  handleTestSubject=()=>{
    const message = this.createChatBotMessage("Subject - Test Subject");
    this.updateChatbotState(message);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleTestTopics = () => {
    const message = this.createChatBotMessage(
      "Test Topics : ",
      {
        widget: "testTopics",
      }
    );

    this.updateChatbotState(message);
  };

  handleTimeTable = () => {
    const message = this.createChatBotMessage(
      "Time Table",
      {
        widget: "timeTable",
      }
    );

    this.updateChatbotState(message);
  };

  handleHelp = () => {
    const message = this.createChatBotMessage(
      "Hi, I'm here to help. What do you want to learn?",
      {
        widget: "learningOptions",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
