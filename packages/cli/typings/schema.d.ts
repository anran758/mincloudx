/*
 */
/* eslint-disable no-use-before-define */

type Int = number;
type SchemaId = string | number;
/** _at 结尾的字段默认约定为时间戳字段 **/
type EpochSeconds = number & { seconds_since_the_unix_start: never };
type JSONString = string & { json_parsable_string: never };
type HTMLText = string & { html_content: never };
type ValueOf<T> = T[keyof T];
type KeyOf<T> = Array<keyof T>;

/**
 * 数据的默认值
 */
type Default<T = undefined> = T;
interface PointerWithoutData {
  id: SchemaId;
  _table: string;
}

type SchemaPointer<T extends BaseTable> = T | PointerWithoutData;

type CreatedBy = UserProfile | PointerWithoutData | number;

export interface BaseTable {
  _id: number;
  id: SchemaId;
  created_at: number;
  updated_at: number;
  created_by?: CreatedBy;
  read_perm: string[];
  write_perm: string[];
}

/**
 * 数据表: _userprofile
 * @description
 */
export interface UserProfile extends BaseTable {
  /**
   * 用户昵称
   **/
  nickname: string | Default;
  /**
   * 用户的性别，值为 1 时是男性，值为 2 时是女性，值为 0 时是未知
   **/
  gender: Int | Default;
  /**
   * 用户所在国家
   **/
  country: string | Default;
  /**
   * 用户所在省份
   **/
  province: string | Default;
  /**
   * 用户所在城市
   **/
  city: string | Default;
  /**
   * 用户的语言
   **/
  language: string | Default;
  /**
   * openid
   **/
  openid: string | Default;
  /**
   * unionid
   **/
  unionid: string | Default;
  /**
   * 用户头像
   **/
  avatar: string | Default;
  /**
   * 用户是否授权，True 为已授权，False 为未授权
   **/
  is_authorized: boolean | Default;
  /**
   * 用户邮箱是否已经通过验证
   **/
  _email_verified: boolean | Default;
  /**
   * 用户邮箱
   **/
  _email: string | Default;
  /**
   * 用户名
   **/
  _username: string | Default;
  /**
   * 用户在平台方的用户信息
   **/
  _provider: object | Default;
  /**
   * 用户手机
   **/
  _phone: string | Default;
  /**
   * 用户手机是否已经通过验证
   **/
  _phone_verified: boolean | Default;
}

/**
 * 数据表: _richtextcontent
 * @description
 */
export interface RichTextContent extends BaseTable {
  /**
   * 内容的标题
   **/
  title: string | Default;
  /**
   * 内容的简介
   **/
  description: string | Default;
  /**
   * 内容的封面图
   **/
  cover: WechatBaaS.FileOperationResult | Default;
  /**
   * 内容详情
   **/
  content: string | Default;
  /**
   * 内容库 ID
   **/
  group_id: Int | Default;
  /**
   * 内容分类的 ID 列表
   **/
  categories: Int[] | Default;
  /**
   * 内容阅读数
   **/
  visit_count: Int | Default;
}

/**
 * 数据表: channel_follow
 * @description channel_follow
 */
export interface ChannelFollow extends BaseTable {
  /**
   * 圈子信息
   **/
  channel: SchemaPointer<Channel> | Default;
}

/**
 * 数据表: pins_vote_log
 * @description 想法点赞记录表
 */
export interface PinsVoteLog extends BaseTable {
  /**
   * 主体类型，用于区分 subject_id 的用途。可选类型为： 1. pins
   **/
  subject_type: string | 'pins' | Default<'pins'>;
  /**
   * 主体的 id
   **/
  subject_id: string | Default;
}

/**
 * 数据表: channel_activity_log
 * @description 圈子活动参与记录表
 */
export interface ChannelActivityLog extends BaseTable {
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
 * 数据表: channel_feed
 * @description 圈子动态表
 */
export interface ChannelFeed extends BaseTable {
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
 * 数据表: pins
 * @description 想法表
 */
export interface Pins extends BaseTable {
  /**
   * 内容点赞数
   **/
  upvote: Int | Default<0>;
  /**
   * "想法" 附带的图片
   **/
  images: string[] | Default;
  /**
   * 主体 id
   **/
  subject_id: string | Default;
  /**
   * 主体类型，用于区分 subject_id 的用途。可选类型为： 1. channel
   **/
  subject_type: string | Default;
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
 * 数据表: channel_activity
 * @description 圈子活动表
 */
export interface ChannelActivity extends BaseTable {
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
  detail: string | Default;
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
  contact_info: string | Default;
}

/**
 * 数据表: channel
 * @description 圈子表
 */
export interface Channel extends BaseTable {
  /**
   * 圈子名称
   **/
  name: string | Default;
  /**
   * 圈子封面图
   **/
  cover_image: string | Default;
  /**
   * 圈子描述
   **/
  description: string | Default;
  /**
   * 圈子状态
   **/
  status: string | 'approved' | 'deleted' | Default<'approved'>;
}

/**
 * 数据表: channel_admin
 * @description 用于保存圈子的管理员信息
 */
export interface ChannelAdmin extends BaseTable {
  /**
   * 圈子 id
   **/
  channel_id: string | Default;
}
