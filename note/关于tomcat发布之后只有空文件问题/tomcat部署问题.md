## 问题描述
#### 1. 环境 eclipse + tomcat9
#### 2. tomcat配置没有问题，可以正常启动，但是访问web项目报404
#### 3. 查找问题，发现没有把项目部署到tomcat容器中（webapps文件夹下）
#### 4. clean...publish...都没有用

## 解决方案
#### 重新建一个同名的项目，将项目下的 .project 文件 和 .settings 文件夹 复制到要发布的项目对应位置

#### 发布项目，成功


## 避免此类问题
#### 1. 不提交 .settings文件夹
#### 2. 不提交 .project文件

#### 3. 提交前后端代码，不提交配置文件