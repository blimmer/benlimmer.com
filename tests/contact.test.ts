import { expect, test } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/freelance/contact");
  });

  test("displays contact form with proper structure", async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Contact.*Freelance.*Ben Limmer/);

    // Check main heading
    const heading = page.getByRole("heading", { level: 1, name: "Contact" });
    await expect(heading).toBeVisible();

    // Check form exists
    const form = page.locator("#contact-form");
    await expect(form).toBeVisible();

    // Check all required fields are present
    const nameInput = page.locator("#name-input");
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveAttribute("required");

    const emailInput = page.locator("#email-input");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("required");
    await expect(emailInput).toHaveAttribute("type", "email");

    const messageInput = page.locator("#message-input");
    await expect(messageInput).toBeVisible();
    await expect(messageInput).toHaveAttribute("required");

    // Check submit button exists and is initially disabled
    const submitBtn = page.locator("#submit-btn");
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeDisabled();
    await expect(submitBtn).toHaveAttribute("aria-disabled", "true");

    // Check alternative email link
    const emailLink = page.getByRole("link", { name: /send me an email/ });
    await expect(emailLink).toHaveAttribute("href", "mailto:hello@benlimmer.com?subject=Freelance%20Services");
  });

  test("validates required fields correctly", async ({ page }) => {
    const nameInput = page.locator("#name-input");
    const emailInput = page.locator("#email-input");
    const messageInput = page.locator("#message-input");
    const submitBtn = page.locator("#submit-btn");

    // Initially, button should be disabled
    await expect(submitBtn).toBeDisabled();

    // Fill only name field and blur
    await nameInput.fill("John Doe");
    await nameInput.blur();
    await expect(submitBtn).toBeDisabled(); // Still disabled

    // Fill email field and blur
    await emailInput.fill("john@example.com");
    await emailInput.blur();
    await expect(submitBtn).toBeDisabled(); // Still disabled

    // Fill message field
    await messageInput.fill("Hello, I need help with my project.");
    await messageInput.blur();

    // Now button should be enabled
    await expect(submitBtn).toBeEnabled();
    await expect(submitBtn).toHaveAttribute("aria-disabled", "false");
  });

  test("shows validation errors for empty fields after touch", async ({ page }) => {
    const nameInput = page.locator("#name-input");
    const emailInput = page.locator("#email-input");
    const messageInput = page.locator("#message-input");

    const nameError = page.locator("#name-error");
    const emailError = page.locator("#email-error");
    const messageError = page.locator("#message-error");

    // Initially, error messages should be hidden
    await expect(nameError).toBeHidden();
    await expect(emailError).toBeHidden();
    await expect(messageError).toBeHidden();

    // Focus and blur name field without filling
    await nameInput.focus();
    await nameInput.blur();
    await expect(nameError).toBeVisible();
    await expect(nameError).toHaveText("Please enter your name.");
    await expect(nameInput).toHaveClass(/border-red-500/);

    // Focus and blur email field without filling
    await emailInput.focus();
    await emailInput.blur();
    await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText("Please enter a valid email address.");
    await expect(emailInput).toHaveClass(/border-red-500/);

    // Focus and blur message field without filling
    await messageInput.focus();
    await messageInput.blur();
    await expect(messageError).toBeVisible();
    await expect(messageError).toHaveText("Please enter a message.");
    await expect(messageInput).toHaveClass(/border-red-500/);
  });

  test("validates email format", async ({ page }) => {
    const emailInput = page.locator("#email-input");
    const emailError = page.locator("#email-error");

    // Enter invalid email and blur
    await emailInput.fill("invalid-email");
    await emailInput.blur();

    await expect(emailError).toBeVisible();
    await expect(emailInput).toHaveClass(/border-red-500/);

    // Fix email format
    await emailInput.fill("valid@example.com");
    await emailInput.blur();

    await expect(emailError).toBeHidden();
    await expect(emailInput).not.toHaveClass(/border-red-500/);
  });

  test("clears validation errors when fields are filled correctly", async ({ page }) => {
    const nameInput = page.locator("#name-input");
    const nameError = page.locator("#name-error");

    // Trigger error first
    await nameInput.focus();
    await nameInput.blur();
    await expect(nameError).toBeVisible();

    // Fill field correctly
    await nameInput.fill("John Doe");
    await expect(nameError).toBeHidden();
    await expect(nameInput).not.toHaveClass(/border-red-500/);
  });

  test("handles form submission with mocked API response", async ({ page }) => {
    // Mock the API endpoint to return success
    await page.route("https://api.benlimmer.com/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    const nameInput = page.locator("#name-input");
    const emailInput = page.locator("#email-input");
    const messageInput = page.locator("#message-input");
    const submitBtn = page.locator("#submit-btn");
    const successDiv = page.locator("#contact-success");

    // Fill form
    await nameInput.fill("John Doe");
    await emailInput.fill("john@example.com");
    await messageInput.fill("I need help with my project.");

    // Submit form
    await submitBtn.click();

    // Button should be disabled during submission
    await expect(submitBtn).toBeDisabled();

    // Wait for success message
    await expect(successDiv).toBeVisible();
    await expect(successDiv).toHaveText("Thank you! I'll be in touch with you in 1-3 business days.");

    // Check that form fields are disabled after success
    await expect(nameInput).toBeDisabled();
    await expect(emailInput).toBeDisabled();
    await expect(messageInput).toBeDisabled();
  });

  test("handles form submission with mocked API error", async ({ page }) => {
    // Mock the API endpoint to return error
    await page.route("https://api.benlimmer.com/contact", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "Internal server error" }),
      });
    });

    const nameInput = page.locator("#name-input");
    const emailInput = page.locator("#email-input");
    const messageInput = page.locator("#message-input");
    const submitBtn = page.locator("#submit-btn");
    const errorDiv = page.locator("#contact-error");

    // Fill form
    await nameInput.fill("John Doe");
    await emailInput.fill("john@example.com");
    await messageInput.fill("I need help with my project.");

    // Submit form
    await submitBtn.click();

    // Wait for error message
    await expect(errorDiv).toBeVisible();
    await expect(errorDiv).toHaveText(/There was an error submitting the form/);

    // Check that button is re-enabled for retry
    await expect(submitBtn).toBeEnabled();
    await expect(submitBtn).toHaveAttribute("aria-disabled", "false");
    await expect(submitBtn).toHaveText("Submit");
  });

  test("sends correct POST data to API", async ({ page }) => {
    let requestBody: any;

    // Intercept and capture the API request
    await page.route("https://api.benlimmer.com/contact", async (route) => {
      const request = route.request();
      requestBody = JSON.parse(request.postData() || "{}");

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    const nameInput = page.locator("#name-input");
    const emailInput = page.locator("#email-input");
    const messageInput = page.locator("#message-input");
    const submitBtn = page.locator("#submit-btn");

    const testData = {
      name: "John Doe",
      email: "john@example.com",
      message: "I need help with my project. Please contact me soon.",
    };

    // Fill form
    await nameInput.fill(testData.name);
    await emailInput.fill(testData.email);
    await messageInput.fill(testData.message);

    // Submit form
    await submitBtn.click();

    // Wait for success message to ensure request was made
    await expect(page.locator("#contact-success")).toBeVisible();

    // Verify the request body contains correct data
    expect(requestBody).toEqual(testData);
  });
});
