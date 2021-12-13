<template>
  <div>
    <div class="calculator">
      <h2 class="title1">Risk Calculators to Predict Morbidity in Patients Undergoing Liver Resection for Hepatocellular
        Carcinoma</h2>
      <div class="contains">
        <p>
          <strong>
            This easy-to-use prediction model aims to calculate the probability of overall morbidity and major morbidity
            in patients undergoing liver resection for hepatocellular carcinoma (HCC). The model takes into account both
            preoperative and postoperative conditions and can be switched at will. This online tool can be useful in
            clinical practice by offering information based on the patient and tumor, and surgery.
          </strong>
        </p>
      </div>
      <strong>
        <p>This prediction tool also known as nomogram is based on data from liver resection for HCC study project
          participated by several major medical centers in China. The model incorporated seven parameters including
          albumin-bilirubin grade (ALBI), aspartate transaminase to platelet index (APRI), cirrhosis, portal
          hypertension, largest tumor size intraoperative transfusion and major hepatectomy so as to predict the risk of
          morbidity after liver resection for HCC. Patients with high-risk of morbidity should receive more intensive
          postoperative surveillance. In this way, this prediction model could facilitate individualized decision
          making, and further reduce the incidence of morbidity. The model was originated from clinical data of 2301
          patients.</p>
        <p>Please note that the present model did not specify a specific threshold at which adjuvant therapy should be
          recommended. We believe that the final decision should be made after thoughtful discussion between clinician
          and patient according actual situation.</p>
        <div class="calculatorborder">
          <el-tabs type="border-card">
            <el-tab-pane label="Preoperative Calculator">
              <el-form ref="form" :model="form">
                <table class="container">
                  <tbody>
                  <tr align="center">
                    <td>
                      <p>
                        Click the underlined variables
                        <br>
                        to get more information.
                        <br>
                        <br>
                        Please fill in all the fields
                        <br>
                        and click the submit.
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
                          <template #suffix>
                            μmol/L
                          </template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>

                    <el-col :span="2">2)</el-col>
                    <el-col :span="12">
                      <el-form-item label="CA199">
                        <el-input v-model="form.CA199">
                          <template #suffix>
                            μmol/L
                          </template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                    <el-col :span="2">3)</el-col>
                    <el-col :span="12">
                      <el-form-item label="肿瘤分化">
                        <el-select v-model="form.DiffSelect" filterable placeholder="请选择" style="width: 100%"
                                   value-key="value">
                          <el-option v-for="item in tumorList" :key="item.value" :label="item.value + ':' + item.label"
                                     :value="item.value">
                            <span style="float: left">{{ item.value }} : {{ item.label }}</span>
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="10"></el-col>
                    <el-col :span="2">4)</el-col>
                    <el-col :span="12">
                      <el-form-item label="N分期">
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
                      <el-col :span="8"></el-col>
                      <el-col :span="16">
                        <el-button type="primary" @click="onSubmit(form)">Submit</el-button>
                        <el-button type="text" @click="onCancel()">Cancel</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  </tbody>
                </table>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="Postoperative Calculator">Postoperative Calculator</el-tab-pane>
          </el-tabs>
        </div>
      </strong>
    </div>
  </div>
</template>

<script>
import api from "@/axios/api";

export default {
  name: "Calculator",
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
    }
  },
  methods: {
    onSubmit(form) {
      if(this.form.StagSelect.length == 0 || this.form.Far.length == 0 || this.form.DiffSelect.length == 0 || this.form.CA199.length == 0){
        alert("请完整填写信息")
      }else {
        console.log(form);
        //转换成数字字符串传输
        if(this.form.DiffSelect == 1){
          this.form.TumorDiff = "0";
        }else if(this.form.DiffSelect == 2){
          this.form.TumorDiff = "0.87532783375395700";
        }else if(this.form.DiffSelect == 3){
          this.form.TumorDiff = "1.218195171925550000";
        }

        if(this.form.StagSelect == 1){
          this.form.Staging = "0";
        }else if(this.form.StagSelect == 2){
          this.form.Staging = "0.89364066626980100";
        }else if(this.form.StagSelect == 3){
          this.form.Staging = "1.686727261417380000";
        }
        api.postList(form).then((res) => {
          console.log(res.data);
        })
      }
    },
    onCancel() {
      this.form.Staging = '';
      this.form.Far = '';
      this.form.DiffSelect = '';
      this.form.CA199 = '';
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