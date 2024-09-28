// describe('Test suite', () => {
//     it('Test case', async () => {
//         await driver.pause(5000)

//     });
//     it('Test case', async () => {
//         const app = await $('~App');
//         const app.click();
//         const actionbar=await $('~Action Bar');
//         const isDisplayed=await actionbar.isDisplayed();
//         expect(isDisplayed).toBaExisting();

//     });
// });

describe("Test-suit", () => {
    it("Test case", async () => {
      await driver.pause(5000);
    });
    it("Test case", async () => {
      //use the accesibitlty ID to locate and click
      const app = await $("~App");
      await app.click();
      const actionbar = await $("~Action Bar");
      const isDisplayed = await actionbar.isDisplayed();
      expect(isDisplayed).toBeExisting();
    });
  });