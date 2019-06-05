<template>
  <editor id="tinymce" v-model="tinymceHtml" :init="editorInit" />
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  components: { Editor },
  data() {
    return {
      tinymceHtml: '',
      editorInit: {
        language_url: '/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 300,
        plugins:
          'link lists image code table colorpicker textcolor wordcount contextmenu media',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        images_upload_handler: (blobInfo, success, failure) => {
          this.handleImgUpload(blobInfo, success, failure)
        }
      }
    }
  },
  watch: {
    tinymceHtml(e) {
      this.$emit('tinymceHtml', e)
    }
  },
  mounted() {
    tinymce.init({})
  },
  methods: {
    handleImgUpload(blobInfo, success, failure) {
      const formdata = new FormData()
      formdata.set('upload_file', blobInfo.blob())
      //   success 和 failure 是函数，上传成功的时候向 success 传入一个图片地址，失败的时候向 failure 传入报错信息
      //   axios
      //     .post('/api/upload', formdata)
      //     .then(res => {
      //       success(res.data.data.src)
      //     })
      //     .catch(res => {
      //       failure('error')
      //     })
    }
  }
}
</script>

<style></style>
