# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component tracks changes in data, where as a functional component is stateless, and simply renders the data passed along to it.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount is called upon the first render when the component is initially mounted to the DOM.
    componentWillUpdate is called every time the component needs to be re-rendered due to a change in state.

3. Define stateful logic.
    Any logic that is built into a function, typically dealing with the components state.

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange: Set up the test by declaring all necessary inputs, and the conditions of working functionality.

    Act: Test your functionality by passing data into arranged inputs.

    Assert: State the expected results of correct actions.