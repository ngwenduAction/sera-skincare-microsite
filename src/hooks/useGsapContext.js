import { useGSAP } from "../utils/gsap.js";

const useGsapContext = (callback, options = {}) => {
  const { dependencies = [], revertOnUpdate = true, scope } = options;

  return useGSAP(callback, {
    scope,
    dependencies,
    revertOnUpdate,
  });
};

export default useGsapContext;
