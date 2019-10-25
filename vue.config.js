module.exports = {
    lintOnSave:false,
   
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0'// 填写本机IP地址 mac: ifconfig en0
        //port: 8080,   改变启动IP地址
        },
}