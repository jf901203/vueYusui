import Mock from "../util";
import json from '../data.json'

const data = [
  {
    id: new Date().getTime() + "",
    name: "testname",
    content: "testcontent"
  }
];

// mock后台接口

Mock.get(/xboot\/test\/find/, data);
Mock.post(/xboot\/test\/save/, data);
Mock.put(/xboot\/test\/update/, data);
Mock.delete(/xboot\/test\/del/, data);

// mock后台接口

Mock.mock('/xboot/footer', {code:0, data: json.footer})
Mock.mock('/xboot/banner', {code:0, data: json.banner})
Mock.mock('/xboot/home', {code:0, data: json.home})
Mock.mock('/xboot/product', {code:0, data: json.product})
Mock.mock('/xboot/information', {code:0, data: json.information})
Mock.mock('/xboot/internet', {code:0, data: json.internet})
Mock.mock('/xboot/government', {code:0, data: json.government})
Mock.mock('/xboot/electron', {code:0, data: json.electron})
Mock.mock('/xboot/model', {code:0, data: json.model})
Mock.mock('/xboot/smart', {code:0, data: json.smart})
Mock.mock('/xboot/about', {code:0, data: json.about})



