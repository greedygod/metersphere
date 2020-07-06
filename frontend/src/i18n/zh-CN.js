export default {
  commons: {
    delete_cancelled: '已取消删除',
    workspace: '工作空间',
    organization: '组织',
    setting: '设置',
    project: '项目',
    about_us: '关于',
    current_project: '当前项目',
    name: '名称',
    description: '描述',
    clear: '清空',
    save: '保存',
    save_success: '保存成功',
    delete_success: '删除成功',
    copy_success: '复制成功',
    modify_success: '修改成功',
    delete_cancel: '已取消删除',
    confirm: '确定',
    cancel: '取消',
    prompt: '提示',
    operating: '操作',
    input_limit: '长度在 {0} 到 {1} 个字符',
    login: '登录',
    welcome: '欢迎回来，请输入用户名和密码登录MeterSphere',
    username: '姓名',
    password: '密码',
    input_username: '请输入用户姓名',
    input_password: '请输入密码',
    test: '测试',
    create_time: '创建时间',
    update_time: '更新时间',
    add: '添加',
    member: '成员',
    email: '邮箱',
    phone: '电话',
    role: '角色',
    personal_info: '个人信息',
    status: '状态',
    show_all: '显示全部',
    show: '显示',
    report: '报告',
    user: '用户',
    system: '系统',
    personal_setting: '个人设置',
    test_resource_pool: '测试资源池',
    system_setting: '系统设置',
    api: '接口测试',
    performance: '性能测试',
    functional: '功能测试',
    input_content: '请输入内容',
    create: '新建',
    edit: '编辑',
    copy: '复制',
    refresh: '刷新',
    remark: '备注',
    delete: '删除',
    not_filled: '未填写',
    please_select: '请选择',
    search_by_name: '根据名称搜索',
    personal_information: '个人信息',
    exit_system: '退出系统',
    verification: '验证',
    title: '标题',
    custom: '自定义',
    select_date: '选择日期',
    calendar_heatmap: '测试日历',
    months_1: '一月',
    months_2: '二月',
    months_3: '三月',
    months_4: '四月',
    months_5: '五月',
    months_6: '六月',
    months_7: '七月',
    months_8: '八月',
    months_9: '九月',
    months_10: '十月',
    months_11: '十一月',
    months_12: '十二月',
    weeks_0: '周日',
    weeks_1: '周一',
    weeks_2: '周二',
    weeks_3: '周三',
    weeks_4: '周四',
    weeks_5: '周五',
    weeks_6: '周六',
    test_unit: '测试',
    system_parameter_setting: '系统参数设置',
    connection_successful: '连接成功',
    connection_failed: '连接失败',
    save_failed: '保存失败',
    host_cannot_be_empty: '主机不能为空',
    port_cannot_be_empty: '端口号不能为空',
    account_cannot_be_empty: '帐户不能为空',
    remove: '移除',
    remove_cancel: '移除取消',
    remove_success: '移除成功',
    tips: '认证信息已过期，请重新登录',
    not_performed_yet: '尚未执行',
    incorrect_input: '输入内容不正确',
    delete_confirm: '请输入以下内容，确认删除：',
    login_username: 'ID 或 邮箱',
    input_login_username: '请输入用户 ID 或 邮箱',
  },
  workspace: {
    create: '创建工作空间',
    update: '修改工作空间',
    delete: '删除工作空间',
    delete_confirm: '删除该工作空间会关联删除该工作空间下的所有资源(如：相关项目，测试用例等），确定要删除吗?',
    add: '添加工作空间',
    input_name: '请输入工作空间名称',
    search_by_name: '根据名称搜索',
    organization_name: '所属组织',
    please_choose_organization: '请选择组织',
    please_select_a_workspace_first: '请先选择工作空间！',
    none: '无工作空间',
    select: '选择工作空间',
    special_characters_are_not_supported: '格式错误(不支持特殊字符，且不能以\'-\'开头结尾)',
    delete_warning: '删除该工作空间将同步删除该工作空间下所有项目，以及项目中的所有用例、接口测试、性能测试等,确定要删除吗?',
  },
  organization: {
    create: '创建组织',
    modify: '修改组织',
    delete: '删除组织',
    delete_confirm: '删除该组织会关联删除该组织下的所有资源(如：相关工作空间，项目，测试用例等），确定要删除吗?',
    input_name: '请输入组织名称',
    select_organization: '请选择组织',
    search_by_name: '根据名称搜索',
    special_characters_are_not_supported: '格式错误(不支持特殊字符，且不能以\'-\'开头结尾)',
    none: '无组织',
    select: '选择组织',
    delete_warning: '删除该组织将同步删除该组织下所有相关工作空间和相关工作空间下的所有项目，以及项目中的所有用例、接口测试、性能测试等,确定要删除吗?',
  },
  project: {
    recent: '最近的项目',
    create: '创建项目',
    edit: '编辑项目',
    delete: '删除项目',
    delete_confirm: '确定要删除这个项目吗?',
    delete_tip: '删除该项目，会删除该项目下所有测试资源，确定要删除吗?',
    search_by_name: '根据名称搜索',
    input_name: '请输入项目名称',
    owning_workspace: '所属工作空间',
    please_choose_workspace: '请选择工作空间',
    special_characters_are_not_supported: '格式错误(不支持特殊字符，且不能以\'-\'开头结尾)',
  },
  member: {
    create: '添加成员',
    modify: '修改成员',
    delete_confirm: '这个用户确定要删除吗?',
    please_choose_member: '请选择成员',
    search_by_name: '根据名称搜索',
    modify_personal_info: '修改个人信息',
    edit_password: '修改密码',
    edit_information: '编辑信息',
    input_name: '请输入名称',
    input_email: '请输入邮箱',
    special_characters_are_not_supported: '不支持特殊字符',
    mobile_number_format_is_incorrect: '手机号码格式不正确',
    email_format_is_incorrect: '邮箱格式不正确',
    password_format_is_incorrect: '有效密码：8-16位，英文大小写字母+数字+特殊字符（可选）',
    old_password: '旧密码',
    new_password: '新密码',
    remove_member: '确定要移除该成员吗',
    input_id_or_email: '请输入用户 ID, 或者 用户邮箱',
    no_such_user: '无此用户信息, 请输入正确的用户 ID 或者 用户邮箱！',
  },
  user: {
    create: '创建用户',
    modify: '修改用户',
    input_name: '请输入用户姓名',
    input_id: '请输入ID',
    input_email: '请输入邮箱',
    input_password: '请输入密码',
    input_phone: '请输入电话号码',
    special_characters_are_not_supported: '不支持特殊字符',
    mobile_number_format_is_incorrect: '手机号码格式不正确',
    email_format_is_incorrect: '邮箱格式不正确',
    delete_confirm: '这个用户确定要删除吗?',
    apikey_delete_confirm: '这个 API Key 确定要删除吗?',
    input_id_placeholder: '请输入ID (只支持数字、英文字母)'
  },
  role: {
    please_choose_role: '请选择角色',
    admin: '系统管理员',
    org_admin: '组织管理员',
    test_manager: '测试经理',
    test_user: '测试人员',
    test_viewer: 'Viewer',
    add: '添加角色',
  },
  report: {
    recent: '最近的报告',
    search_by_name: '根据名称搜索',
    test_name: '所属测试',
    test_overview: '测试概览',
    test_request_statistics: '请求统计',
    test_error_log: '错误记录',
    test_log_details: '日志详情',
    test_details: '测试详情',
    test_duration: '持续时间：{0} 分钟 {1} 秒',
    test_start_time: '开始时间',
    test_end_time: '结束时间',
    test_stop_now: '立即停止',
    test_stop_now_confirm: '确定要立即停止当前测试吗？',
    test_rerun_confirm: '确定要再次执行当前测试吗？',
    test_stop_success: '停止成功',
    test_execute_again: '再次执行',
    export: '导出',
    compare: '比较',
    generation_error: '报告生成错误,无法查看!',
    being_generated: '报告正在生成中...',
    delete_confirm: '确认删除报告: ',
    start_status: '测试处于开始状态,请稍后查看报告！',
    run_status: '测试处于运行状态,请稍后查看报告！',
    user_name: '创建人',
    project_name: '所属项目',

  },
  load_test: {
    operating: '操作',
    recent: '最近的测试',
    search_by_name: '根据名称搜索',
    project_name: '所属项目',
    delete_confirm: '确认删除测试: ',
    input_name: '请输入名称',
    select_project: '请选择项目',
    save_and_run: '保存并执行',
    basic_config: '场景配置',
    pressure_config: '压力配置',
    advanced_config: '高级配置',
    runtime_config: '运行配置',
    is_running: '正在运行！',
    test_name_is_null: '测试名称不能为空！',
    project_is_null: '项目不能为空！',
    jmx_is_null: '必需包含一个JMX文件，且只能包含一个JMX文件！',
    file_name: '文件名',
    file_size: '文件大小',
    file_type: '文件类型',
    file_status: '文件状态',
    last_modify_time: '修改时间',
    upload_tips: '将文件拖到此处，或<em>点击上传</em>',
    upload_type: '只能上传JMX/CSV文件',
    related_file_not_found: "未找到关联的测试文件！",
    delete_file_confirm: '确认删除文件: ',
    file_size_limit: "文件个数超出限制！",
    delete_file: "文件已存在，请先删除同名文件！",
    thread_num: '并发用户数：',
    input_thread_num: '请输入线程数',
    duration: '压测时长（分钟）：',
    input_duration: '请输入时长',
    rps_limit: 'RPS上限：',
    input_rps_limit: '请输入限制',
    ramp_up_time_within: '在',
    ramp_up_time_minutes: '分钟内，分',
    ramp_up_time_times: '次增加并发用户',
    advanced_config_error: '高级配置校验失败',
    domain_bind: '域名绑定',
    domain: '域名',
    enable: '是否启用',
    ip: 'IP地址',
    params: '自定义属性',
    param_name: '属性名',
    param_value: '属性值',
    domain_is_duplicate: '域名不能重复',
    param_is_duplicate: '参数名不能重复',
    domain_ip_is_empty: '域名和IP不能为空',
    param_name_value_is_empty: '参数名和参数值不能为空',
    connect_timeout: '建立连接超时时间',
    custom_http_code: '自定义 HTTP 响应成功状态码',
    separated_by_commas: '按逗号分隔',
    create: '创建测试',
    select_resource_pool: '请选择资源池',
    resource_pool_is_null: '资源池为空',
    download_log_file: '下载完整日志文件',
    pressure_prediction_chart: '压力预估图',
    user_name: '创建人',
    special_characters_are_not_supported: '测试名称不支持特殊字符',
    pressure_config_params_is_empty: '压力配置参数不能为空!'
  },
  api_test: {
    creator: "创建人",
    save_and_run: "保存并执行",
    run: "执行",
    running: "正在执行",
    reset: "重置",
    input_name: "请输入测试名称",
    select_project: "请选择项目",
    variable_name: "变量名",
    copied: "已拷贝",
    key: "键",
    value: "值",
    create_performance_test: "创建性能测试",
    export_config: "导出配置",
    scenario: {
      config: "场景配置",
      input_name: "请输入场景名称",
      name: "场景名称",
      base_url: "基础URL",
      base_url_description: "基础URL作为所有请求的URL前缀",
      variables: "自定义变量",
      headers: "请求头",
      kv_description: "所有请求可以使用自定义变量",
      copy: "复制场景",
      delete: "删除场景"
    },
    request: {
      copy: "复制请求",
      delete: "删除请求",
      input_name: "请输入请求名称",
      name: "请求名称",
      method: "请求方法",
      url: "请求URL",
      url_description: "例如: https://fit2cloud.com",
      url_invalid: "URL无效",
      parameters: "请求参数",
      parameters_desc: "参数追加到URL，例如https://fit2cloud.com/entries?key1=Value1&Key2=Value2",
      headers: "请求头",
      body: "请求内容",
      body_kv: "键值对",
      body_text: "文本",
      assertions: {
        label: "断言",
        text: "文本",
        regex: "正则",
        response_time: "响应时间",
        select_type: "请选择类型",
        select_subject: "请选择对象",
        select_condition: "请选择条件",
        contains: "包含",
        not_contains: "不包含",
        equals: "等于",
        start_with: "以...开始",
        end_with: "以...结束",
        value: "值",
        expression: "Perl型正则表达式",
        response_in_time: "响应时间在...毫秒以内",
      },
      extract: {
        label: "提取",
        select_type: "请选择类型",
        description: "从响应结果中提取数据并将其存储在变量中，在后续请求中使用变量。",
        regex: "正则",
        regex_expression: "Perl型正则表达式",
        json_path_expression: "JSONPath表达式",
        xpath_expression: "XPath表达式",
      }
    }
  },
  api_report: {
    title: "报告",
    request: "请求",
    request_body: "请求内容",
    request_headers: "请求头",
    request_cookie: "Cookie",
    response: "响应",
    delete_confirm: '确认删除报告: ',
    scenario_name: "场景名称",
    response_time: "响应时间(ms)",
    latency: "网络延迟",
    request_size: "请求大小",
    response_size: "响应大小",
    response_code: "状态码",
    response_message: "响应报文",
    error: "错误",
    assertions: "断言",
    assertions_pass: "成功断言",
    assertions_name: "断言名称",
    assertions_error_message: "错误信息",
    assertions_is_success: "是否成功",
    result: "结果",
    success: "成功",
    fail: "失败",
    total: "全部",
    test_name: "所属测试",
    request_result: "请求结果",
    sub_result: "子请求",
    detail: "报告详情",
    delete: "删除报告",
  },
  test_track: {
    test_track: "测试跟踪",
    confirm: "确 定",
    cancel: "取 消",
    project: "项目",
    save: "保 存",
    return: "返 回",
    length_less_than: "长度必须小于",
    recent_plan: "最近的计划",
    recent_case: "最近的用例",
    pass_rate: "通过率",
    case: {
      test_case: "测试用例",
      move: "移动用例",
      case_list: "用例列表",
      create_case: "创建用例",
      edit_case: "编辑用例",
      view_case: "查看用例",
      no_project: "该工作空间下无项目，请先创建项目",
      priority: "优先级",
      type: "类型",
      method: "测试方式",
      auto: "自动",
      manual: "手动",
      create: "新建用例",
      case_type: "用例类型",
      name: "用例名称",
      module: "所属模块",
      maintainer: "维护人",
      steps: "执行步骤",
      number: "编号",
      prerequisite: "前置条件",
      step_desc: "步骤描述",
      expected_results: "预期结果",
      input_name: "请输入名称",
      input_module: "请选择模块",
      input_maintainer: "请选择维护人",
      input_priority: "请选择优先级",
      input_type: "请选择用例类型",
      input_method: "请选择测试方式",
      input_prerequisite: "请输入前置条件",
      delete_confirm: "确认删除测试用例",
      delete: "删除用例",
      save_create_continue: "保存并继续创建",
      please_create_project: "暂无项目，请先创建项目",
      create_module_first: "请先新建模块",
      relate_test: "关联测试",
      import: {
        import: "导入用例",
        case_import: "导入测试用例",
        download_template: "下载模版",
        click_upload: "点击上传",
        upload_limit: "只能上传xls/xlsx文件，且不超过20M",
        upload_limit_count: "一次只能上传一个文件",
        upload_limit_format: "上传文件只能是 xls、xlsx格式!",
        upload_limit_size: "上传文件大小不能超过 20MB!",
        success: "导入成功！",
        importing: "导入中...",
      },
      export: {
        export: "导出用例"
      }
    },
    plan: {
      test_plan: "测试计划",
      create_plan: "创建测试计划",
      edit_plan: "编辑测试计划",
      plan_name: "计划名称",
      plan_project: "所属项目",
      plan_stage: "测试阶段",
      plan_status: "当前状态",
      smoke_test: "冒烟测试",
      functional_test: "功能测试",
      regression_test: "回归测试",
      integration_testing: "集成测试",
      system_test: "系统测试",
      version_validation: "版本验证",
      plan_principal: "负责人",
      input_plan_name: "请输入测试计划名称",
      input_plan_principal: "请选择负责人",
      input_plan_project: "请选择所属项目",
      input_plan_stage: "请选择测试阶段",
      plan_status_prepare: "未开始",
      plan_status_running: "进行中",
      plan_status_completed: "已完成",
      plan_delete_confirm: "将删除该测试计划下所有用例，确认删除测试计划: ",
      plan_delete: "删除计划",
    },
    module: {
      search: "搜索模块",
      rename: "重命名",
      add_submodule: "添加子模块",
      add_module: "添加模块",
      name: "模块名称",
      delete_confirm: "确认删除模块: ",
      delete_all_resource: "以及模块下所有子模块和测试用例",
      module: "模块",
    },
    home: {
      recent_test: "最近测试",
      my_plan: "我的计划",
      test_rate: "测试进度",
      tested_case: "已测用例",
    },
    plan_view: {
      plan: "计划",
      relevance_test_case: "关联测试用例",
      executor: "执行人",
      execute_result: "执行结果",
      pass: "通过",
      failure: "失败",
      blocking: "阻塞",
      skip: "跳过",
      actual_result: "实际结果",
      step_result: "步骤执行结果",
      my_case: "我的用例",
      all_case: "全部用例",
      pre_case: "上一条用例",
      next_case: "下一条用例",
      change_execution_results: "更改执行结果",
      change_executor: "更改执行人",
      select_executor: "请选择执行人",
      select_execute_result: "选择执行结果",
      cancel_relevance: "取消用例关联",
      confirm_cancel_relevance: "确认取消关联",
      select_manipulate: "请选择需要操作的数据",
      select_template: "选择模版",
      step: "步骤",
      submit_issues: "提缺陷",
      operate_step: "操作步骤",
      edit_component: "编辑组件",
      base_info: "基础信息",
      test_result: "测试结果",
      result_distribution: "测试结果分布",
      custom_component: "自定义模块",
      create_report: "创建测试报告",
      view_report: "查看测试报告",
      component_library: "组件库",
      component_library_tip: "拖拽组件库中组件，添加至右侧，预览报告效果，每个系统组件只能添加一个。",
      delete_component_tip: "请至少保留一个组件",
      input_template_name: "输入模版名称",
      case_count: "用例数",
      issues_count: "缺陷数",
      result_statistics: "测试结果统计",
      result_statistics_chart: "测试结果统计图",
      create_template: "新建模版",
      report_template: "测试报告模版",
      test_detail: "测试详情",
      failure_case: "失败用例",
    }
  },
  test_resource_pool: {
    type: '类型',
    enable_disable: '启用/禁用',
    search_by_name: '根据名称搜索',
    create_resource_pool: '创建资源池',
    update_resource_pool: '修改资源池',
    select_pool_type: '选择资源类型',
    max_threads: '最大并发数',
    input_pool_name: '请输入资源池名称',
    pool_name_valid: '资源池名称不支持特殊字符',
    cannot_remove_all_node: '不能删除所有独立节点',
    cannot_empty: '资源池不能为空',
    fill_the_data: '请完善数据',
    delete_prompt: '此操作将永久删除该资源池, 是否继续?',
    status_change_success: '状态修改成功!',
    status_change_failed: '状态修改失败, 校验不通过!',
    check_in: '校验中',
  },
  system_parameter_setting: {
    mailbox_service_settings: '邮件设置',
    ldap_setting: 'LDAP设置',
    test_connection: '测试连接',
    SMTP_host: 'SMTP主机',
    SMTP_port: 'SMTP端口',
    SMTP_account: 'SMTP账户',
    SMTP_password: 'SMTP密码',
    SSL: '开启SSL(如果SMTP端口是465，通常需要启用SSL)',
    TLS: '开启TLS(如果SMTP端口是587，通常需要启用TLS)',
    SMTP: '是否匿名 SMTP',
  },
  i18n: {
    home: '首页'
  },
  ldap: {
    url: 'LDAP地址',
    dn: '绑定DN',
    password: '密码',
    ou: '用户OU',
    filter: '用户过滤器',
    mapping: 'LDAP属性映射',
    open: '启用LDAP认证',
    input_url: '请输入LDAP地址',
    input_dn: '请输入DN',
    input_password: '请输入密码',
    input_ou: '请输入用户OU',
    input_filter: '请输入用户过滤器',
    input_mapping: '请输入LDAP属性映射',
    input_username: '请输入用户名',
    input_url_placeholder: '请输入LDAP地址 (如 ldap://localhost:389)',
    input_ou_placeholder: '输入用户OU (使用|分隔各OU)',
    input_filter_placeholder: '输入过滤器 [可能的选项是cn或uid或sAMAccountName=%(user)s]',
    test_connect: '测试连接',
    test_login: '测试登录',
    edit: '编辑',
    login_success: '登录成功',
    url_cannot_be_empty: 'LDAP 地址不能为空',
    dn_cannot_be_empty: 'LDAP DN不能为空',
    ou_cannot_be_empty: 'LDAP OU不能为空',
    password_cannot_be_empty: 'LDAP 密码不能为空',
  }
};
