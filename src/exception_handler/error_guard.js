const noop = () => {};

export const setJSExceptionHandler = (customHandler = noop, allowedInDevMode = false) => {
    if (typeof allowedInDevMode !== "boolean" || typeof customHandler !== "function") {
        console.log("setJSExceptionHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean");
        console.log("Not setting the JS handler .. please fix setJSExceptionHandler call");
        return;
    }
    const allowed = allowedInDevMode ? true : !__DEV__;
    if (allowed) {
        global.ErrorUtils.setGlobalHandler(customHandler);
        console.error = (message, error) => global.ErrorUtils.reportError(error); // sending console.error so that it can be caught
    } else {
        console.log("Skipping setJSExceptionHandler: Reason: In DEV mode and allowedInDevMode = false");
    }
};

export const getJSExceptionHandler = () => global.ErrorUtils.getGlobalHandler();

export default {
    setJSExceptionHandler,
    getJSExceptionHandler,
};