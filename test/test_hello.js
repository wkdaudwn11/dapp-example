const helloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", function(accounts){
    before(async () => {
      this.instance = await helloWorld.deployed();
    });

    it("should be initialized with correct value", async () => {
      const greeting = await this.instance.greeting();
      assert.equal(greeting, "Hello World!", "Wrong initialized!");
    });

    it("should change the greeting", async () => {
      const val = "Hello, Blockchain!";
      await this.instance.setGreeting(val, {from: accounts[0]});

      const greeting = await this.instance.say();
      assert.equal(greeting, "Hello, Blockchain!", "does not change the value!");
    });
})