const create = async (call) => {
  try {
    const { buttonId } = call;
    console.log(buttonId)
    return call;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    create
};
