package com.bram

import java.util.concurrent.TimeUnit

import org.junit.*

import static org.junit.Assert.*

import org.openqa.selenium.*
import org.openqa.selenium.htmlunit.HtmlUnitDriver
import org.openqa.selenium.firefox.FirefoxDriver

class MainTests {
    WebDriver driver
    final baseUrl = "http://localhost:5000"

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver()
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS)
    }

    @Test
    public void testBaseURLHasUnCollapsedNavBar() throws Exception {
        driver.get(baseUrl)
        assertFalse(driver.findElement(By.className("navbar")).getAttribute('class').contains('top-nav-collapse'))
    }

    @Test
    public void testEducationSectionDisplayed() throws Exception {
        driver.get("$baseUrl/#education")
        driver.findElement(By.cssSelector("li.active a")).getAttribute("href") == "#education"
    }

    @After
    public void tearDown() throws Exception {
        driver.quit()
    }
}