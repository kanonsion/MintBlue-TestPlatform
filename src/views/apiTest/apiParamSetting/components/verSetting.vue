<template>
  <div>
    <el-row justify="end" type="flex" class="button-bar">
      <el-col :span="3" :offset="3">
        <el-button type="primary" @click="addVersion">新增版本</el-button>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col :span="24">
        <el-table :data="versionInfo" :header-cell-style="tableHeaderColor" border>
          <el-table-column label="版本号" prop="version"></el-table-column>
          <el-table-column label="版本信息" min-width="200" prop="verDesc"></el-table-column>
          <el-table-column label="创建时间" width="150" prop="createTime"></el-table-column>
          <el-table-column label="创建人" width="150" prop="creator"></el-table-column>
          <el-table-column label="操作" width="100" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" size="medium" @click="editVersion(scope.row)">编辑</el-button>
              <el-button type="text" size="medium" @click="delVersion">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog :title="dialogTitle" :visible.sync="versionDialogDisplay" width="50%" @close="handleCloseDialog">
      <el-form :model="versionInfoForm" :rules="versionInfoRules" ref="versionRuleForm" label-width="80px">
        <el-form-item label="版本号" prop="version">
          <el-input v-model="versionInfoForm.version" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="版本信息" prop="verDesc">
          <el-input v-model="versionInfoForm.verDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="versionDialogDisplay = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmitVer">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'verSetting',
  data () {
    return {
      versionInfo: [
        { version: 'V2.10.0', verDesc: '版本信息1', createTime: '2020.11.12', creator: 'DDDDanny' },
        { version: 'V2.11.0', verDesc: '版本信息2', createTime: '2020.11.13', creator: 'DDDDanny' }
      ],
      // 表格表头数据
      tableHeaderColor: { background: '#FAFAFA' },
      // 控制弹框是否显示
      versionDialogDisplay: false,
      // 版本信息Form表单
      versionInfoForm: {
        version: '',
        verDesc: ''
      },
      // 版本信息校验规则
      versionInfoRules: {
        version: [
          { required: true, message: '请输入版本号', trigger: 'blur' }
        ],
        verDesc: [
          { required: true, message: '请输入版本信息', trigger: 'blur' }
        ]
      },
      // 判断是否为编辑
      isEdit: false
    }
  },
  computed: {
    // 获取 Dialog Title
    dialogTitle: function () {
      if (this.isEdit) return '编辑版本号'
      return '新增版本号'
    }
  },
  methods: {
    // 删除版本
    delVersion () {
      this.$confirm('此操作将永久删除该版本, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 这里写删除项目的逻辑
        // ---
        // ---
        this.$message.success('删除成功！')
      }).catch(() => {
        this.$message.info('您已取消删除～')
      })
    },
    // 新增版本信息
    addVersion () {
      this.isEdit = false
      this.versionDialogDisplay = true
      // 点击新增环境信息时，清空一次表单数据
      Object.keys(this.versionInfoForm).forEach(key => (this.versionInfoForm[key] = ''))
    },
    // 处理提交版本信息
    handleSubmitVer () {
      this.$refs.versionRuleForm.validate((valid) => {
        if (!valid) {
          this.$message.error('请填写必填项！')
          return
        }
        if (!this.isEdit) {
          // 新增版本号逻辑写在这
          //
          //
          this.$message.success('新增版本号成功！')
        } else {
          // 编辑版本号逻辑写在这
          //
          //
          this.$message.success('更新版本号成功！')
        }
        // 隐藏弹框
        this.versionDialogDisplay = false
      })
    },
    // 处理弹框关闭事件
    handleCloseDialog () {
      // 重置数据
      this.$refs.versionRuleForm.resetFields()
    },
    // 编辑版本号
    editVersion (verRow) {
      this.isEdit = true
      this.versionDialogDisplay = true
      this.versionInfoForm.version = verRow.version
      this.versionInfoForm.verDesc = verRow.verDesc
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-bar {
    margin-bottom: 25px;
  }
</style>
