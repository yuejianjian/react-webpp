export function getHost(){
    var result;
    const host = {
        dev: 'https://api.izsjia.com',
        demo: 'https://api.izsjia.com',
        stage: 'https://api.izsjia.com',
        pro: 'https://api.izsjia.com',
        local: 'https://api.izsjia.com'
    };
    var loginHost = {
        dev: 'https://api.izsjia.com',
        demo: 'https://api.izsjia.com',
        pro: 'https://api.izsjia.com',
        local: 'https://api.izsjia.com'
    };
    console.log(location.hostname);
    if (location.hostname.match(/.+-dev/i)) {
        result = host.dev;
    } else if (location.hostname.match(/.+-demo/i)) {
        result = host.demo;
    } else if (location.hostname.match(/.*localhost/i)) {
        result = host.local;
    } else if (location.hostname.match(/.*tunnel.qydev.com/i)) {
          result = host.dev;
    } 
    else if (location.hostname.match(/.*stage/i)) {
        result = host.stage;
    } else {
        result = host.pro;
    }
  
    
    return result;
  }
  