import { notifyError, notifyWarning } from "src/components/ui/Notification";


export const handleErrorResponse = error => {
  if (error.response) {
    if (error.response.status === 401) {
      return true;
    }
    const response = error.response.data;
    // Handle warnings {warning: "Warning message"}
    if (response && response.warning) {
      if (response.message) {
        notifyWarning(response.message, response.warning);
      }
      else {
        notifyWarning(response.warning, "Warning");
      }
      return true;
    }
    // Handle errors {error: "Error message"}
    if (response && response.error) {
      if (response.message) {
        notifyError(response.message, response.error);
      }
      else {
        notifyError(response.error, "Error");
      }
      return true;
    }
    // Handle DRF exceptions https://www.django-rest-framework.org/api-guide/exceptions/
    // Field validation errors
    if (response && error.response.status === 400) {
      Object.values(response.validation_errors).forEach(errors => {
        for (error of errors) {
          notifyError(error, "Error");
        }
      });
      return true;
    }
    // If the validation error was not specific to a particular field
    // then it will use the "non_field_errors" key, or whatever
    // string value has been set for the NON_FIELD_ERRORS_KEY setting.
    if (response && response.non_field_errors) {
      for (error of response.non_field_errors) {
        notifyError(error, "Error");
      }
      return true;
    }
  }
  return false;
};
