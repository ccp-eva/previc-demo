// utility function returns a boolean if a give file exists
export const fileChecker = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      return true;
    }
    return false;
  };