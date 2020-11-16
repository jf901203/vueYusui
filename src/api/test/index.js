import { getRequest, postRequest, putRequest, deleteRequest, uploadFileRequest } from "@/libs/axios";

// 获取全部测试数据
export const getTestData = params => {
  return getRequest("/test/find", params);
};
// 添加测试数据
export const saveTest = params => {
  return postRequest("/test/save", params);
};
// 编辑测试数据
export const updateTest = params => {
  return putRequest("/test/update", params);
};
// 删除测试数据
export const deleteTest = (ids, params) => {
  return deleteRequest(`/test/del/${ids}`, params);
};

// 前端发送请求的接口 用ajax发送请求获取数据

// 获取轮播图
export const getBanner=()=>getRequest('/banner');


// 获取公司底部
export const getFooter=()=>{
  return getRequest('/footer');
};
// 获取首页
export const getHome=()=>{ 
  return getRequest('/home');
};
// 获取软件开发服务数据
export const getProduct=()=>{
  return getRequest('/product');
};

// 获取信息系统集成服务数据

export const getInformation=()=>{
  return getRequest('/information');
};



// 获取互联网数据

export const getInternet=()=>{
  return getRequest('/internet');
};


// 获取政府综合业务管理数据

export const getGovernment=()=>{
  return getRequest('/government');
};

// 获取电子化评审数据
export const getElectron=()=>{
  return getRequest('/electron');
};

// 获取三维建模数据
export const getModel=()=>{
  return getRequest('/model');
};

// 获取智慧照明数据
export const getSmart=()=>{
  return getRequest('/smart');

};
// 获取关于我们数据
export const getAbout=()=>{
  return getRequest('/about');
};
