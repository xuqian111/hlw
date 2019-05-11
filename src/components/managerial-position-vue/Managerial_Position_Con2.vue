<template>
    <div class="Ma_Po_Se_Con2">
      <div class="Ma_Po_Se_Con2_Midd">
        <div class="Ma_Po_Se_Con2_Card">
          <div class="Ma_Po_Se_Con2_Card_Btn">
            <div class="Ma_Po_Se_Con2_Card_Btn_left">
              <el-row class="Ma_Po_Se_Con2_Card_Btn_left_lists">
                <el-button type="primary" icon="el-icon-plus" class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">新增</el-button>
                <el-button type="success" icon="el-icon-edit"  class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">修改</el-button>
                <el-button type="warning" icon="el-icon-close"  class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">删除</el-button>
                <el-button type="danger" icon="el-icon-download "  class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">导出</el-button>
              </el-row>
            </div>
            <div class="Ma_Po_Se_Con2_Card_Btn_right">
              <el-button-group>
                <el-button icon="el-icon-search" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single"></el-button>
                <el-button  icon="el-icon-refresh" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single"></el-button>
                <el-button icon="el-icon-tickets" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single" ></el-button>
                <el-button icon="el-icon-s-grid" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single">
                  <!--<div class=""></div>-->
                </el-button>
              </el-button-group>
            </div>

          </div>
          <div class="Ma_Po_Se_Con2_Card_Table_lists">
            <div class="Ma_Po_Se_Con2_Card_Table">
              <table class="Ma_Po_Se_Con2_Card_Table_Con" style="width:100%;">
                <tr class="Ma_Po_Se_Con2_Card_Table_Con_first_tr">
                  <td>  <el-checkbox ></el-checkbox></td>
                  <td>岗位编号</td>
                  <td>岗位编码</td>
                  <td> 岗位名称</td>
                  <td>显示顺序</td>
                  <td>状态</td>
                  <td>创建时间</td>
                  <td>操作</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table_Con_first_tr Ma_Po_Se_Con2_Card_Table_Con_first_tr1">
                  <td>  <el-checkbox ></el-checkbox></td>
                  <td>1</td>
                  <td>ceo</td>
                  <td> 董事长</td>
                  <td>1</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff;padding: 4px 15px;" align="center" >正常</el-button></td>
                  <td>2018-03-16 11:33:00</td>
                  <td><el-row style=";display: flex;justify-content: center; align-items: center;
align-items: center;" > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center;padding: 4px 15px;">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close" ></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table_Con_first_tr Ma_Po_Se_Con2_Card_Table_Con_first_tr1">
                  <td>  <el-checkbox ></el-checkbox></td>
                  <td>1</td>
                  <td>ceo</td>
                  <td> 董事长</td>
                  <td>1</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff;padding: 4px 15px;" align="center" >正常</el-button></td>
                  <td>2018-03-16 11:33:00</td>
                  <td><el-row style=";display: flex;justify-content: center; align-items: center;
align-items: center;" > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center;padding: 4px 15px;">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table_Con_first_tr Ma_Po_Se_Con2_Card_Table_Con_first_tr1">
                  <td>  <el-checkbox ></el-checkbox></td>
                  <td>1</td>
                  <td>ceo</td>
                  <td> 董事长</td>
                  <td>1</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff;padding: 4px 15px;" align="center" >正常</el-button></td>
                  <td>2018-03-16 11:33:00</td>
                  <td><el-row style=";display: flex;justify-content: center; align-items: center;
align-items: center;" > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center;padding: 4px 15px;" >编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table_Con_first_tr Ma_Po_Se_Con2_Card_Table_Con_first_tr1">
                  <td>  <el-checkbox ></el-checkbox></td>
                  <td>1</td>
                  <td>ceo</td>
                  <td> 董事长</td>
                  <td>1</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff;padding: 4px 15px;" align="center" >正常</el-button></td>
                  <td>2018-03-16 11:33:00</td>
                  <td><el-row style=";display: flex;justify-content: center; align-items: center;
align-items: center;" > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center;padding: 4px 15px;">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>


            </div>
            <div class="Ma_Po_Se_Con2_Card_Table2" >
              <table class="Ma_Po_Se_Con2_Card_Table2_Con1" style="padding-bottom: 8px;">
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td><el-checkbox ></el-checkbox></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编号</td>
                  <td>1</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编码</td>
                  <td>ceo</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位名称</td>
                  <td> 董事长</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>状态</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff; padding: 4px 15px;"  >正常</el-button></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>创建时间</td>
                  <td>2018-03-16 11:33:00</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>操作</td>
                  <td><el-row style=";display: flex; align-items: center;
align-items: center; " > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center; padding: 4px 15px;" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <table class="Ma_Po_Se_Con2_Card_Table2_Con1" style="padding-bottom: 8px;">
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td><el-checkbox ></el-checkbox></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编号</td>
                  <td>1</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编码</td>
                  <td>ceo</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位名称</td>
                  <td> 董事长</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>状态</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff; padding: 4px 15px;"  >正常</el-button></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>创建时间</td>
                  <td>2018-03-16 11:33:00</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>操作</td>
                  <td><el-row style=";display: flex; align-items: center;
align-items: center; " > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center; padding: 4px 15px;" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <table class="Ma_Po_Se_Con2_Card_Table2_Con1" style="padding-bottom: 8px;">
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td><el-checkbox ></el-checkbox></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编号</td>
                  <td>1</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编码</td>
                  <td>ceo</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位名称</td>
                  <td> 董事长</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>状态</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff; padding: 4px 15px;"  >正常</el-button></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>创建时间</td>
                  <td>2018-03-16 11:33:00</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>操作</td>
                  <td><el-row style=";display: flex; align-items: center;
align-items: center; " > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center; padding: 4px 15px;" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <table class="Ma_Po_Se_Con2_Card_Table2_Con1" style="padding-bottom: 8px;">
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td><el-checkbox ></el-checkbox></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编号</td>
                  <td>1</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位编码</td>
                  <td>ceo</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>岗位名称</td>
                  <td> 董事长</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>状态</td>
                  <td><el-button   round style="font-size:12px;width:36px; height:18px;display: flex;justify-content: center;
background: #1ab394;color:#fff; padding: 4px 15px;"  >正常</el-button></td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>创建时间</td>
                  <td>2018-03-16 11:33:00</td>
                </tr>
                <tr class="Ma_Po_Se_Con2_Card_Table2_Con1_tr">
                  <td>操作</td>
                  <td><el-row style=";display: flex; align-items: center;
align-items: center; " > <el-button type="primary" icon="el-icon-edit" style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
align-items: center; padding: 4px 15px;" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" icon="el-icon-close"style="font-size:12px;width:48px; height:22px;display: flex;justify-content: center;
padding: 4px 15px;" >删除</el-button>
                  </el-row>
                    <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog">
                      <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd">
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top">
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left">
                            修改岗位
                          </div>
                          <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right">
                            <i class="el-icon-minus" ></i>
                            <i class="el-icon-copy-document" style="margin:0 8px;"></i>
                            <i class="el-icon-close"></i>
                          </div>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="岗位名称">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位编码">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="显示顺序">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="岗位状态">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot">
                          <el-button type="primary">确认</el-button>
                          <el-button>取消</el-button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="Ma_Po_Se_Con2_Card_Sum">
            <p class="Ma_Po_Se_Con2_Card_Text">第 1 到 4 条，共 4 条记录。
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Managerial_Position_Con2",
      data() {

        return {
          isShow:true,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          tableData: [
            {
            JobsNumbers: '1',
            Postcode: 'ceo',
            Name: '董事长',
            According:1,
            Status:"正常",
            Time:"2018-03-16 11:33:00",
          },
            {
              JobsNumbers: '1',
              Postcode: 'ceo',
              Name: '董事长',
              According:1,
              Status:"正常",
              Time:"2018-03-16 11:33:00",
            },
            {
              JobsNumbers: '1',
              Postcode: 'ceo',
              Name: '董事长',
              According:1,
              Status:"正常",
              Time:"2018-03-16 11:33:00",
            },
            {
              JobsNumbers: '1',
              Postcode: 'ceo',
              Name: '董事长',
              According:1,
              Status:"正常",
              Time:"2018-03-16 11:33:00",
            },
          ],
          multipleSelection: []

        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },

        // toggleSelection(rows) {
        //   if (rows) {
        //     rows.forEach(row => {
        //       this.$refs.multipleTable.toggleRowSelection(row);
        //     });
        //   } else {
        //     this.$refs.multipleTable.clearSelection();
        //   }
        // },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
       /****
        * 点击编辑按钮弹出一个框
        *
        * ***/








       /****
        *
        * 点击切换按钮让两个盒子显示隐藏
        *
        * ****/

    //    showToggle(){
    //        this.isShow=!this.isShow;
    //       if(this.isShow){
    //         document.getElementsByClassName("Ma_Po_Se_Con2_Card_Table").style.display="block"
    //         document.getElementsByClassName("Ma_Po_Se_Con2_Card_Table").style.display="none"
    //       }else{
    //         document.getElementsByClassName("Ma_Po_Se_Con2_Card_Table").style.display="block"
    //         document.getElementsByClassName("Ma_Po_Se_Con2_Card_Table").style.display="none"
    //       }
    //    }
    //
    // }



    }
</script>

<style scoped>
  .Ma_Po_Se_Con2{
    width:100%;
    padding-top: 10px;
    box-sizing: border-box;
    background-clip: content-box;
  }
  .Ma_Po_Se_Con2_Midd{
    width:100%;
    height:100%;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 2px 1px 3px 0.5px #e1e1e2;
    border :1px solid #ececed;
    box-sizing: border-box;
  }
 .Ma_Po_Se_Con2_Card{
   width:100%;
   height:100%;
   padding-top:15px ;
   padding-left:14px ;
   padding-right: 14px;
   box-sizing: border-box;

 }
  .Ma_Po_Se_Con2_Card_Btn{
    width:100%;
    display: flex;
    padding-bottom: 10px;
  }
  .Ma_Po_Se_Con2_Card_Btn_left{
    width:100%;
    display:flex ;
    justify-content: flex-start;
    align-items: center;
  }
  .Ma_Po_Se_Con2_Card_Btn_right{
    width:100%;
    display:flex ;
    justify-content: flex-end;
    align-items: center;
  }
  .Ma_Po_Se_Con2_Card_Btn_left_lists{
    display: flex;
  }
  .Ma_Po_Se_Con2_Card_Btn_left_lists_single{
    width:58px;
    height:30px;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
   el-icon-caret-bottom{
    margin:0;
    padding:0;
  }
.Ma_Po_Se_Con2_Card_Btn_right_lists_single{
  display: flex;
  align-items: center;
  height:30px;
  font-size: 16px;
  color:#676a6c;
  border:1px solid #c2c2c2;

}
.Ma_Po_Se_Con2_Card_Btn_right_lists_single:hover{
  background: #d4d4d4;
  color:#fff;
}
.Ma_Po_Se_Con2_Card_Table_lists{
  width:100%;
}
  .Ma_Po_Se_Con2_Card_Table{

    width:100%;
    box-sizing: border-box;
  }
  .Ma_Po_Se_Con2_Card_Sum{
    width:100%;
    padding-top:15px;
    padding-bottom: 50px;
  }
  .Ma_Po_Se_Con2_Card_Text{
    font-size: 14px;
    color:#676a6c;
  }
  .Ma_Po_Se_Con2_Card_Table_Con tr:nth-child(1){
    background:#eff3f8;


  }
  .Ma_Po_Se_Con2_Card_Table_Con tr td{
    font-size:13px ;
    color:#676a6c;
    border-bottom: 1px solid #e7eaec;
    padding:14px 0;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr {
    width:100%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(1){
    width:3.5%;
    padding-left: 8px;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(2){
    width:10%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(3){
    width:14%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(4){
    width:14%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(5){
    width:15%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(6){
    width:7%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(7){
    width:15%;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_tr td:nth-child(8){

    width:20%;
    text-align: center;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_trdialog{
    display: none;
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: rgba(0,0,0,.4);
    z-index: 30;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd{
    position: absolute;
    left:15%;
    top:5%;
    width:800px;
    height:434px;
    background: #fff;
    z-index: 40;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top{
    width:100%;
    display: flex;
    background: #f8f8f8;
    border-bottom: 2px solid #eeeeee;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_left{
    width:100%;
    display: flex;
    justify-content: flex-start;
    font-size: 13px;
    color:#333333;
    line-height: 43px;
    padding-left: 20px;
  }
.Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_top_right{
  width:100%;
  display: flex;
  justify-content: flex-end;
  font-size:13px ;
  align-items: center;
  color:#2e2d3c;
  padding-right:20px ;
}
.Ma_Po_Se_Con2_Card_Table_Con_first_tr1:hover{
  background:#f5f5f5;
}
  .Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Cen{
    width:100%;
    padding:30px  130px 30px 57px;
    box-sizing: border-box;
    animation:leftcon 2s 1   ;
  }
  @keyframes leftcon {
    0% {
      transform: translateX(50px);
    }
    20%{
      transition-timing-function:linear;
    }
    100%{
      transform: translateX(0);
    }
  }
  el-button--small {
    padding: 4px 15px;
  }
  .Ma_Po_Se_Con2_Card_Table_Con_first_trdialog_Midd_Bot {
    display: flex;
    height:58px;
    justify-content: flex-end;
    padding-right: 20px;
    align-items: center;
    width: 100%;
    border-top: 2px solid #eeeeee;
    background: #f0f4f7;
    box-sizing: border-box;
  }
 .Ma_Po_Se_Con2_Card_Table2{
   display: none;
 }
.Ma_Po_Se_Con2_Card_Table2_Con1{
  width:100%;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-collapse:separate;
  border-bottom: 1px solid #e7eaec;
}
  .Ma_Po_Se_Con2_Card_Table2_Con1 tr:last-child{
    width:100%;
    height:24px;
    padding-bottom: 8px;
  }
  .Ma_Po_Se_Con2_Card_Table2_Con1:hover{
    background:#f5f5f5;
  }
  .Ma_Po_Se_Con2_Card_Table2_Con1_tr td{
    font-size: 14px;
    color:#676a6c;
    line-height: 22px;
  }
  .Ma_Po_Se_Con2_Card_Table2_Con1_tr td:nth-child(1){
    font-weight: 900;
    width:29%;
  }
  .Ma_Po_Se_Con2_Card_Table2_Con1_tr td:nth-child(2){
    width:71%;
  }


</style>
