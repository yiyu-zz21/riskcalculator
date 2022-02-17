<template>
  <div>
    <div class="calculator">
      <h2 class="title1">{{ $t('aac.title2') }}</h2>
      <div class="contains">
        <p>
          <strong>
            {{ $t('aac.introduce1')}}
          </strong>
        </p>
      </div>
      <strong>
        <p>{{ $t('aac.introduce2')}}</p>
        <p>{{ $t('aac.introduce3')}}</p>
        <div class="calculatorborder">
          <el-tabs type="border-card">
            <el-tab-pane :label= " $t('aac.tab1') ">
              <el-form ref="form" :model="form">
                <table class="container">
                  <tbody>
                  <tr align="center">
                    <td>
                      <p>
                        {{ $t('aac.page1') }}
                        <br>
                        {{ $t('aac.page2') }}
                        <br>
                        <br>
                        {{ $t('aac.page3') }}
                        <br>
                        {{ $t('aac.page4') }}
                        <br>
                        <br>
                      </p>
                    </td>
                  </tr>
                  <el-row>
                    <el-col :span="2">1)</el-col>
                    <el-col :span="12">
                      <el-form-item :label="$t('aac.diameter')">
                        <el-input v-model="form.Diameter">
                          <template #suffix>
                            cm
                          </template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                    <el-col :span="2">2)</el-col>
                    <el-col :span="12">
                      <el-form-item :label="$t('aac.invasion')">
                        <el-select v-model="form.InvasionSelect" filterable placeholder="请选择" style="width: 100%"
                                   value-key="value">
                          <el-option v-for="item in invasionList" :key="item.value" :label="item.label"
                                     :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                    <el-col :span="2">3)</el-col>
                    <el-col :span="12">
                      <el-form-item :label="$t('aac.nstage')">
                        <el-select v-model="form.StagSelect" filterable placeholder="请选择" style="width: 100%"
                                   value-key="value">
                          <el-option v-for="item in stagingList" :key="item.value" :label="item.label"
                                     :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                    <el-col :span="2">4)</el-col>
                    <el-col :span="12">
                      <el-form-item :label="$t('aac.tumorDiff')">
                        <el-select v-model="form.DiffSelect" filterable placeholder="请选择" style="width: 100%"
                                   value-key="value">
                          <el-option v-for="item in tumorList" :key="item.value" :label="item.label"
                                     :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                  </el-row>
                  <el-form-item>
                    <el-row>
                      <el-col :span="10"></el-col>
                      <el-col :span="14">
                        <el-button type="primary" @click="onSubmit(form)">{{ $t('aac.submit') }}</el-button>
                        <el-button type="text" @click="onCancel()">{{ $t('aac.cancel') }}</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  </tbody>
                </table>
              </el-form>
              <br/>
              <h2 align="center">{{ $t('aac.result') }}</h2>
              <br/>
              <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                  {{ $t('aac.predicted') }}
                </el-col>
                <el-col :span="6">
                  <el-input v-model="predicted" readonly="true" placeholder="Please Submit"></el-input>
                </el-col>
                <el-col :span="12"></el-col>
              </el-row>
              <br/>
              <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                  {{ $t('aac.risk') }}
                </el-col>
                <el-col :span="6">
                  <el-input v-model="risk" readonly="true" placeholder="Please Submit"></el-input>
                </el-col>
                <el-col :span="12"></el-col>
              </el-row>
              <br/>
              <br/>
            </el-tab-pane>
            <!--            <el-tab-pane label="Postoperative Calculator">Postoperative Calculator</el-tab-pane>-->
          </el-tabs>
        </div>
      </strong>
    </div>
  </div>
</template>

<script>
import api from "@/axios/api";

export default {
  name: "AacCalculator",
  data() {
    return {
      form: {
        Diameter: '',
        TumorDiff: '',
        Invasion: '',
        Staging: '',
        DiffSelect: '',
        InvasionSelect: '',
        StagSelect: '',
      },
      tumorList: [
        {
          value: 1,
          label: 'well',
        },
        {
          value: 2,
          label: 'moderate',
        },
        {
          value: 3,
          label: 'poor',
        },
      ],
      invasionList: [
        {
          value: 1,
          label: 'NO',
        },
        {
          value: 2,
          label: 'YES',
        },
      ],
      stagingList: [
        {
          value: 1,
          label: 'No',
        },
        {
          value: 2,
          label: '≤3',
        },
        {
          value: 3,
          label: '>3',
        },
      ],

      predicted: '',
      risk: '',
    }
  },
  methods: {
    //点击提交后执行此方法
    onSubmit(form) {
      //首先判断必填项是否都以填写
      if (this.form.InvasionSelect.length == 0 || this.form.Diameter.length == 0 || this.form.DiffSelect.length == 0 || this.form.StagSelect.length == 0) {
        alert("请完整填写信息")
      } else {
        console.log(form);
        //转换成数字字符串传输，转换关系如下
        //1---well---0
        //2---moderate---0.566833019008799
        //3---poor---1.44566201109475
        if (this.form.DiffSelect == 1) {
          this.form.TumorDiff = "0";
        } else if (this.form.DiffSelect == 2) {
          this.form.TumorDiff = "0.566833019008799";
        } else if (this.form.DiffSelect == 3) {
          this.form.TumorDiff = "1.44566201109475";
        }

        //1---No---0
        //2---≤3---0.920603684469587
        //3--->3---1.85010150562131
        if (this.form.StagSelect == 1) {
          this.form.Staging = "0";
        } else if (this.form.StagSelect == 2) {
          this.form.Staging = "0.920603684469587";
        } else if (this.form.StagSelect == 3) {
          this.form.Staging = "1.85010150562131";
        }

        //1---NO---0
        //2---YES---1.0659941799098
        if (this.form.InvasionSelect == 1) {
          this.form.Invasion = "0";
        } else if (this.form.InvasionSelect == 2) {
          this.form.Invasion = "1.0659941799098";
        }
        //将整理好的数据使用axios发送给后端处理，并获取返回结果
        api.aacList(form).then((res) => {
          this.predicted = res.data.predicted;
          this.risk = res.data.risk;
          console.log(res.data.predicted);
          console.log(res.data.risk);
        })
      }
    },
    onCancel() {
      this.form.InvasionSelect = '';
      this.form.Diameter = '';
      this.form.DiffSelect = '';
      this.form.StagSelect = '';
      this.predicted = '';
      this.risk = '';
      console.log("cancel");
    },
  }
}
</script>

<style scoped>
.title1 {
  background-color: white;
  color: cadetblue;
  padding: 0px;
  text-shadow: 5px 5px 5px lightgray;
}

.calculator {
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
}

.contains {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

strong {
  font-weight: bold;
}

.container {
  width: 100%;
}
</style>