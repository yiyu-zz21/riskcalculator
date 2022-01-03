<template>
  <div>
    <div class="calculator">
      <h2 class="title1">{{ $t('risk.title2') }}</h2>
      <div class="contains">
        <p>
          <strong>
            {{ $t('risk.introduce1')}}
          </strong>
        </p>
      </div>
      <strong>
        <p>{{ $t('risk.introduce2')}}</p>
        <p>{{ $t('risk.introduce3')}}</p>
        <div class="calculatorborder">
          <el-tabs type="border-card">
            <el-tab-pane :label= " $t('risk.tab1') ">
              <el-form ref="form" :model="form">
                <table class="container">
                  <tbody>
                  <tr align="center">
                    <td>
                      <p>
                        {{ $t('risk.page1') }}
                        <br>
                        {{ $t('risk.page2') }}
                        <br>
                        <br>
                        {{ $t('risk.page3') }}
                        <br>
                        {{ $t('risk.page4') }}
                        <br>
                        <br>
                      </p>
                    </td>
                  </tr>
                  <el-row>
                    <el-col :span="2">1)</el-col>
                    <el-col :span="12">
                      <el-form-item label="FAR">
                        <el-input v-model="form.Far">
<!--                          <template #suffix>-->
<!--                            μmol/L-->
<!--                          </template>-->
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>

                    <el-col :span="2">2)</el-col>
                    <el-col :span="12">
                      <el-form-item label="CA19-9">
                        <el-input v-model="form.CA199">
                          <template #suffix>
                            U/mL
                          </template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                    <el-col :span="2">3)</el-col>
                    <el-col :span="12">
                      <el-form-item :label="$t('risk.tumorDiff')">
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
                    <el-col :span="2">4)</el-col>
                    <el-col :span="12">
                      <el-form-item :label="$t('risk.nstage')">
                        <el-select v-model="form.StagSelect" filterable placeholder="请选择" style="width: 100%"
                                   value-key="value">
                          <el-option v-for="item in stagingList" :key="item.value" :label="item.label"
                                     :value="item.value">
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
                        <el-button type="primary" @click="onSubmit(form)">{{ $t('risk.submit') }}</el-button>
                        <el-button type="text" @click="onCancel()">{{ $t('risk.cancel') }}</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  </tbody>
                </table>
              </el-form>
              <br/>
              <h2 align="center">{{ $t('risk.result') }}</h2>
              <br/>
              <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                  {{ $t('risk.predicted') }}
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
                  {{ $t('risk.risk') }}
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
  name: "RiskCalculator",
  data() {
    return {
      form: {
        Far: '',
        CA199: '',
        TumorDiff: '',
        Staging: '',
        DiffSelect: '',
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
      stagingList: [
        {
          value: 1,
          label: 'N0',
        },
        {
          value: 2,
          label: 'N1',
        },
        {
          value: 3,
          label: 'N2',
        },
      ],

      predicted: '',
      risk: '',
    }
  },
  methods: {
    onSubmit(form) {
      if (this.form.StagSelect.length == 0 || this.form.Far.length == 0 || this.form.DiffSelect.length == 0 || this.form.CA199.length == 0) {
        alert("请完整填写信息")
      } else {
        console.log(form);
        //转换成数字字符串传输
        if (this.form.DiffSelect == 1) {
          this.form.TumorDiff = "0";
        } else if (this.form.DiffSelect == 2) {
          this.form.TumorDiff = "0.87532783375395700";
        } else if (this.form.DiffSelect == 3) {
          this.form.TumorDiff = "1.218195171925550000";
        }

        if (this.form.StagSelect == 1) {
          this.form.Staging = "0";
        } else if (this.form.StagSelect == 2) {
          this.form.Staging = "0.89364066626980100";
        } else if (this.form.StagSelect == 3) {
          this.form.Staging = "1.686727261417380000";
        }
        api.postList(form).then((res) => {
          this.predicted = res.data.predicted;
          this.risk = res.data.risk;
          console.log(res.data.predicted);
          console.log(res.data.risk);
        })
      }
    },
    onCancel() {
      this.form.StagSelect = '';
      this.form.Far = '';
      this.form.DiffSelect = '';
      this.form.CA199 = '';
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