## 电影榜单

使用bootstrap进行页面布局，通过js动态加载电影信息

### 预览地址

https://jeanchanning.github.io/WebAssignment_2/AnotherMovieIndex.html

若本地预览请使用Microsoft Edge浏览器，Chrome浏览器下可能发生禁止跨域访问等问题（其他浏览器暂未尝试）

### 页面布局

#### 主页

AnotherMovieIndex.html

每页显示20条电影记录，共10页，已实现翻页功能和电影名称模糊搜索功能。其中部分图片存在无法加载的问题，与豆瓣服务器有关

##### 第一页

![1556241302477](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556241302477.png)

![1556241320300](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556241320300.png)

![1556241363390](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556241363390.png)

##### 其他页（第7页为例）

![1556246153598](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556246153598.png)

##### 页面底部推荐

![1556241396373](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556241396373.png)

#### 详情页

MovieDetail.html

首页中，点击列表中电影名称，或点击最下方的推荐电影，即可跳转到详情页面。点击左上角返回榜单即可返回首页列表

##### 电影详情介绍（以秘密炸弹为例）

![1556187595261](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556187595261.png)

![1556187608283](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556187608283.png)

#### 搜索页

SearchResult.html

用户可在首页或者搜索结果页输入想要搜索的电影名称，点击搜索按钮后，对用户输入的电影名称进行模糊匹配（**区分**大小写），在新窗口加载搜索结果

##### 搜索指定电影

![1556246214156](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556246214156.png)

![1556246229830](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556246229830.png)

![1556246239445](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556246239445.png)

##### 无输入情况

![1556246193516](C:\Users\Teng_MY\AppData\Roaming\Typora\typora-user-images\1556246193516.png)