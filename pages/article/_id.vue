<template>
  <div>
    <section class="container">
      <h1>这是文章标题</h1>
      <ul class="info">
        <li>发布于 3 天前</li>
        <li>作者 <nuxt-link to="/user/1">ddzyan</nuxt-link></li>
        <li>284 次浏览</li>
      </ul>
      <el-divider></el-divider>

      /* eslint-disable */
      <article v-html="content"></article>
    </section>
    <section class="container reply">
      <p class="reply-tips">3 回复</p>
      <div class="reply-list">
        <dl v-for="(item, index) in 2" :id="item" :key="item">
          <dt>
            <img
              src="https://cdn.v2ex.com/gravatar/61d0dc88ed6970dd0e44d1bf5b60a20b?s=200&r=g"
              alt=""
            />
          </dt>
          <dd>
            <p class="reply-author">
              <nuxt-link to="/user/1">ddzyan</nuxt-link>
              <el-link :href="'#' + item" type="primary"
                >{{ index + 1 }}F · 1天前</el-link
              >
              <el-tag size="mini">作者</el-tag>
            </p>
            <div class="reply-content" v-html="replyContent"></div>
          </dd>
        </dl>
      </div>
    </section>
    <editor @tinymceHtml="tinymceHtml" />
    <el-col class="submit">
      <el-button type="primary">发表</el-button>
    </el-col>
  </div>
</template>

<script>
/* eslint-disable */
import Editor from '~/components/Editor'
export default {
  components: { Editor },
  validate({ params }) {
    console.log(params)
    // Must be a number
    return params.id
  },
  data() {
    return {
      content: '<p><i>这是篇文章</i></p>',
      replyContent: `<div class="markdown-text"><p>我在两年前是这样用的，当时用的模块是   “ajv”: “^4.11.5”</p>
<pre class="prettyprint language-js"><code><span class="kwd">const</span><span class="pln"> point </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'object'</span><span class="pun">,</span><span class="pln">
  properties</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    id</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'string'</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    point</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'object'</span><span class="pun">,</span><span class="pln">
      properties</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'number'</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
        top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'number'</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
      </span><span class="pun">},</span><span class="pln">
      required</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'left'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'top'</span><span class="pun">],</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  required</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'id'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'point'</span><span class="pun">],</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">const</span><span class="pln"> schema </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  $schema</span><span class="pun">:</span><span class="pln"> </span><span class="str">'http://json-schema.org/draft-04/schema#'</span><span class="pun">,</span><span class="pln">
  title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'xxxxx'</span><span class="pun">,</span><span class="pln">
  description</span><span class="pun">:</span><span class="pln"> </span><span class="str">'xxxx'</span><span class="pun">,</span><span class="pln">
  type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'object'</span><span class="pun">,</span><span class="pln">
  properties</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    points</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'array'</span><span class="pun">,</span><span class="pln">
      items</span><span class="pun">:</span><span class="pln"> point</span><span class="pun">,</span><span class="pln"> </span><span class="com">// 直接引用</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  required</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'points'</span><span class="pun">],</span><span class="pln">
</span><span class="pun">};</span></code></pre></div>`,
      reply: ''
    }
  },
  methods: {
    tinymceHtml(e) {
      this.reply = e
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  padding: 15px;
  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: nth($list: $textColour, $n: 1);
  }
  .info {
    display: flex;
    padding: 0;
    font-size: 12px;
    margin-bottom: 0;
    color: nth($list: $textColour, $n: 3);
    li {
      margin-left: 20px;
    }
  }
  .el-divider {
    margin: 10px 0;
  }
  .article {
    padding: 10px;
    color: nth($list: $textColour, $n: 2);
  }
}
.reply {
  padding: 0;
  .reply-tips {
    background: #f6f6f6;
    padding: 10px;
    color: nth($list: $textColour, $n: 2);
    font-size: 16px;
  }
  .reply-list {
    background: #fff;
    dl {
      border-top: 1px solid nth($list: $borderColour, $n: 1);
      padding: 10px;
      display: flex;
      &:first-child {
        border-top: none;
      }
      > dt {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      > dd {
        margin-left: 0;
        .reply-author {
          margin: 0;
          display: flex;
          align-items: center;
          .el-link {
            margin: 0 10px;
          }
        }
        .reply-content {
          color: nth($list: $textColour, $n: 2);
        }
      }
    }
  }
}
.submit {
  margin-top: 20px;
  text-align: center;
  .el-button {
    width: 150px;
  }
}
</style>
