// [tips]: 该文件由 @mincloudx/cli 自动生成，请勿直接修改文件。
type Int = number;
type SchemaId = string | Int;
type EpochSeconds = Int & { seconds_since_the_unix_start: never };
type JSONString = string & { json_parsable_string: never };
type HTMLText = string & { html_content: never };
type ValueOf<T> = T[keyof T];
type KeyOf<T> = Array<keyof T>;

/**
 * 数据的默认值
 */
type Default<T> = T;
interface PointerWithoutData {
  id: SchemaId;
  _table: string;
}

type SchemaPointer<T extends BaseSchemaObject> = T | PointerWithoutData;

type CreatedBy = UserProfile | PointerWithoutData | Int;

interface BaseSchemaObject {
  _id: Int;
  id: SchemaId;
  created_at: Int;
  updated_at: Int;
  created_by?: CreatedBy;
  read_perm: string[];
  write_perm: string[];
}
/**
 * _userprofile 表
 * @description
 */
interface UserProfile extends BaseSchemaObject {
  /**
   * 用户昵称
   **/
  nickname: string | Default<undefined>;
  /**
   * 用户的性别，值为 1 时是男性，值为 2 时是女性，值为 0 时是未知
   **/
  gender: Int | Default<undefined>;
  /**
   * 用户所在国家
   **/
  country: string | Default<undefined>;
  /**
   * 用户所在省份
   **/
  province: string | Default<undefined>;
  /**
   * 用户所在城市
   **/
  city: string | Default<undefined>;
  /**
   * 用户的语言
   **/
  language: string | Default<undefined>;
  /**
   * openid
   **/
  openid: string | Default<undefined>;
  /**
   * unionid
   **/
  unionid: string | Default<undefined>;
  /**
   * 用户头像
   **/
  avatar: string | Default<undefined>;
  /**
   * 用户是否授权，True 为已授权，False 为未授权
   **/
  is_authorized: boolean | Default<undefined>;
  /**
   * 用户邮箱是否已经通过验证
   **/
  _email_verified: boolean | Default<undefined>;
  /**
   * 用户邮箱
   **/
  _email: string | Default<undefined>;
  /**
   * 用户名
   **/
  _username: string | Default<undefined>;
  /**
   * 用户在平台方的用户信息
   **/
  _provider: object | Default<undefined>;
  /**
   * 用户手机
   **/
  _phone: string | Default<undefined>;
  /**
   * 用户手机是否已经通过验证
   **/
  _phone_verified: boolean | Default<undefined>;
}

/**
 * channel_follow 表
 * @description channel_follow
 */
interface ChannelFollow extends BaseSchemaObject {
  /**
   * 圈子信息
   **/
  channel: SchemaPointer<Channel> | Default<undefined>;
}

/**
 * pins_vote_log 表
 * @description 想法点赞记录表
 */
interface PinsVoteLog extends BaseSchemaObject {
  /**
   * 主体类型，用于区分 subject_id 的用途。可选类型为： 1. pins
   **/
  subject_type: string | 'pins' | Default<'pins'>;
  /**
   * 主体的 id
   **/
  subject_id: string | Default<undefined>;
}

/**
 * channel_activity_log 表
 * @description 圈子活动参与记录表
 */
interface ChannelActivityLog extends BaseSchemaObject {
  /**
   * 圈子id
   **/
  channel_id: string;
  /**
   * 关联的活动 id
   **/
  activity_id: string;
  /**
   * applied_at
   **/
  applied_at: EpochSeconds;
}

/**
 * channel_feed 表
 * @description 圈子动态表
 */
interface ChannelFeed extends BaseSchemaObject {
  /**
   * 关联的圈子 id
   **/
  channel_id: string;
  /**
   * 主体类型，用于区分 subject_id 的用途。可选类型为： 1. activity 2. pins
   **/
  subject_type: string | 'activity' | 'pins';
  /**
   * 主体的 id
   **/
  subject_id: string;
}

/**
 * pins 表
 * @description 想法表
 */
interface Pins extends BaseSchemaObject {
  /**
   * 内容点赞数
   **/
  upvote: Int | Default<0>;
  /**
   * "想法" 附带的图片
   **/
  images: string[] | Default<undefined>;
  /**
   * 主体 id
   **/
  subject_id: string | Default<undefined>;
  /**
   * 主体类型，用于区分 subject_id 的用途。可选类型为： 1. channel
   **/
  subject_type: string | Default<undefined>;
  /**
   * "想法" 内容
   **/
  content: string;
  /**
   * 是否将想法推送到广场中
   **/
  is_public: boolean | Default<true>;
  /**
   * 想法状态
   **/
  status: string | 'approved' | 'deleted' | Default<'approved'>;
}

/**
 * channel_activity 表
 * @description 圈子活动表
 */
interface ChannelActivity extends BaseSchemaObject {
  /**
   * 关联的圈子
   **/
  channel: SchemaPointer<Channel>;
  /**
   * 活动名称
   **/
  name: string;
  /**
   * 活动封面图
   **/
  cover_image: string;
  /**
   * 活动的详细说明
   **/
  detail: string | Default<undefined>;
  /**
   * 报名结束时间 (unix 时间戳)
   **/
  apply_ends_at: EpochSeconds;
  /**
   * 开放的参与名额，-1 表示不限数量
   **/
  quota: Int | Default<-1>;
  /**
   * 已申请名额
   **/
  applied_quota: Int | Default<0>;
  /**
   * 活动发起人的联系信息
   **/
  contact_info: string | Default<undefined>;
}

/**
 * _richtextcontent 表
 * @description
 */
interface RichTextContent extends BaseSchemaObject {
  /**
   * 内容的标题
   **/
  title: string | Default<undefined>;
  /**
   * 内容的简介
   **/
  description: string | Default<undefined>;
  /**
   * 内容的封面图
   **/
  cover: WechatBaaS.FileOperationResult | Default<undefined>;
  /**
   * 内容详情
   **/
  content: string | Default<undefined>;
  /**
   * 内容库 ID
   **/
  group_id: Int | Default<undefined>;
  /**
   * 内容分类的 ID 列表
   **/
  categories: Int[] | Default<undefined>;
  /**
   * 内容阅读数
   **/
  visit_count: Int | Default<undefined>;
}

/**
 * channel 表
 * @description 圈子表
 */
interface Channel extends BaseSchemaObject {
  /**
   * 圈子名称
   **/
  name: string | Default<undefined>;
  /**
   * 圈子封面图
   **/
  cover_image: string | Default<undefined>;
  /**
   * 圈子描述
   **/
  description: string | Default<undefined>;
  /**
   * 圈子状态
   **/
  status: string | 'approved' | 'deleted' | Default<'approved'>;
}

/**
 * channel_admin 表
 * @description 用于保存圈子的管理员信息
 */
interface ChannelAdmin extends BaseSchemaObject {
  /**
   * 圈子 id
   **/
  channel_id: string | Default<undefined>;
}
