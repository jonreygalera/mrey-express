type TAppType = 'version' | string | unknown;

export const projectVersion = (): string => {
  try {
    const pkg = require('../../../package.json');
    return pkg.version || 'unknown';
  } catch {
    return 'unknown';
  }
}

export const app = (key: TAppType) => {
  switch(key) {
    case 'version': return projectVersion();
    default: return null;
  }
}