<template>
  <a-row type="flex" justify="center" align="top">
    <a-col :span="12">
      <a-form @submit.prevent="upload" :form="uploadForm">
        <a-form-item label="">
          <div class="dropbox">
            <a-upload-dragger v-decorator="['file',{rules: [{required: true, message: '文件不能为空'}]}]">
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">拖拽文件至此 或 点击上传文件</p>
            </a-upload-dragger>
          </div>
        </a-form-item>
        <a-form-item>
          <a-textarea placeholder="为上传的文件添加描述" :rows="4" v-decorator="['desc']" />
        </a-form-item>
        <a-form-item>
          <a-button style="width: 100%;height: fit-content;line-height: 38px;" type="primary" html-type="submit">上传</a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      uploadForm: this.$form.createForm(this)
    }
  },
  methods: {
    upload () {
      this.uploadForm.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          const data = {
            desc: values.desc,
            myFiles: values.file.fileList
          }
          // const fd = new FormData(data)
          this.$http('post', 'upload', data).then((res) => {
            console.log(res)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
