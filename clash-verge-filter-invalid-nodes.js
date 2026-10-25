function main(config, profileName) {
  if (config.proxies) {
    // 过滤掉包含特定关键词的节点名称
    const rejectKeywords = /流量|官网|过期|重置|联系|公告|续费|客服/i;
    
    config.proxies = config.proxies.filter(proxy => {
      return !rejectKeywords.test(proxy.name);
    });
  }
  return config;
}
