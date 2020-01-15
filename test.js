module.exports = async function(context, commands) {
  // We have some Selenium context
  const webdriver = context.selenium.webdriver;
  const driver = context.selenium.driver;

  // Start to measure
  await commands.measure.start();
  // Go to a page ...
  await commands.navigate('https://en.m.wikipedia.org/wiki/Barack_Obama');

  // When the page has finished loading you can find the navigation and click on it
  const actions = driver.actions();
  const nav = driver.findElement(
    webdriver.By.xpath('/html/body/div[1]/div/header/form/div[1]/a')
  );
  await actions.click(nav).perform();

  // Measure everything, that means you will run the JavaScript that collects the first input delay
  return commands.measure.stop();
};
