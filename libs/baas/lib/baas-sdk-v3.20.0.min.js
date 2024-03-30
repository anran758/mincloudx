module.exports = /******/ (function (e) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var t = {};
  /******/
  /******/ // The require function
  /******/ function n(a) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (t[a]) /******/ return t[a].exports;
    /******/
    /******/ // Create a new module (and put it into the cache)
    /******/ var i = (t[a] = {
      /******/ i: a,
      /******/ l: !1,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/
    /******/
    /******/ // Return the exports of the module
    /******/ return (
      e[a].call(i.exports, i, i.exports, n),
      /******/
      /******/ // Flag the module as loaded
      /******/ (i.l = !0),
      i.exports
    );
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return (
    (n.m = e),
    /******/
    /******/ // expose the module cache
    /******/ (n.c = t),
    /******/
    /******/ // define getter function for harmony exports
    /******/ (n.d = function (e, t, a) {
      /******/ n.o(e, t) ||
        /******/ Object.defineProperty(e, t, {
          /******/ configurable: !1,
          /******/ enumerable: !0,
          /******/ get: a,
          /******/
        });
      /******/
    }),
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ (n.n = function (e) {
      /******/ var t =
        e && e.__esModule
          ? /******/ function () {
              return e.default;
            }
          : /******/ function () {
              return e;
            };
      /******/
      /******/ return n.d(t, 'a', t), t;
      /******/
    }),
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    /******/
    /******/ // __webpack_public_path__
    /******/ (n.p = ''),
    n((n.s = 57))
  );
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(n, !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const r = n(9),
        s = n(13),
        c = n(16).getInnerRequest,
        p = n(16).getOuterRequest,
        u = n(3),
        l = n(96);
      let d = s.URL,
        m = {};
      (m.tableSchema = {
        getSchema(e) {
          let t = u.makeCompleteUrl(d.SCHEMA_TABLE.GET_SCHEMA, { tableID: e });
          return c().get(t);
        },
        getSchemaList(e) {
          let t = d.SCHEMA_TABLE.GET_SCHEMA_LIST;
          return c().get(t, { params: e });
        },
        createSchema(e = {}) {
          let t = d.SCHEMA_TABLE.CREATE_SCHEMA;
          return c().post(t, e);
        },
        updateSchema(e, t = {}) {
          let n = u.makeCompleteUrl(d.SCHEMA_TABLE.GET_SCHEMA, { tableID: e });
          return c().put(n, t);
        },
        deleteSchema(e) {
          let t = u.makeCompleteUrl(d.SCHEMA_TABLE.GET_SCHEMA, { tableID: e });
          return c().delete(t);
        },
      }),
        (m.schema = {
          getRecord(e, t, n) {
            let a = u.makeCompleteUrl(d.SCHEMA.GET_RECORD, {
              tableID: e,
              recordID: t,
            });
            return c().get(a, { params: n });
          },
          getRecords(e, t) {
            let n = u.makeCompleteUrl(d.SCHEMA.GET_RECORDS, { tableID: e });
            return c().get(n, { params: t });
          },
          createRecord(e, t) {
            let n = u.makeCompleteUrl(d.SCHEMA.CREATE_RECORD, { tableID: e });
            return c().post(n, t);
          },
          createBatchRecord(e, t, n) {
            let a = u.makeCompleteUrl(d.SCHEMA.CREATE_BATCH_RECORD, {
              tableID: e,
            });
            return c().post(a, t, n);
          },
          updateRecord(e, t, n, a = { enable_trigger: 1 }) {
            let i = u.makeCompleteUrl(d.SCHEMA.UPDATE_RECORD, {
              tableID: e,
              recordID: t,
            });
            return c().put(i, n, { params: a });
          },
          updateBatchRecord(e, t, n) {
            let a = u.makeCompleteUrl(d.SCHEMA.UPDATE_BATCH_RECORD, {
              tableID: e,
            });
            return c().put(a, n, { params: t });
          },
          deleteRecord(e, t) {
            let n = u.makeCompleteUrl(d.SCHEMA.DELETE_RECORD, {
              tableID: e,
              recordID: t,
            });
            return c().delete(n);
          },
          deleteBatchRecord(e, t) {
            let n = u.makeCompleteUrl(d.SCHEMA.DELETE_BATCH_RECORD, {
              tableID: e,
            });
            return c().delete(n, { params: t });
          },
          importData(e, { dataFileUrl: t, dataFile: n }, a) {
            let i = u.makeCompleteUrl(d.SCHEMA.IMPORT, { tableID: e }),
              o = c(),
              s = p(),
              m = new l(),
              f = null;
            return (f = new Promise((e, i) => {
              const o = 'string' == typeof a ? a.toLowerCase() : '',
                c = Math.random().toString(36).substring(2, 8) + '.' + o;
              return t
                ? s
                    .get(t)
                    .then(t => {
                      let n = t.data;
                      ('json' !== o && 'object' != typeof n) ||
                        (n = JSON.stringify(n)),
                        m.append('file', Buffer.from(n), c),
                        e();
                    })
                    .catch(e => i(e))
                : 'string' == typeof n
                ? r.access(n, t => {
                    if (t) return i(t);
                    m.append('file', r.createReadStream(n), c), e();
                  })
                : n instanceof Buffer
                ? (m.append('file', Buffer.from(n), c), void e())
                : i(new Error('invalid file param'));
            })).then(() => o.post(i, m, { headers: m.getHeaders() }));
          },
          exportData(e, t, n, a, i) {
            let o = u.makeCompleteUrl(d.SCHEMA.EXPORT, { tableID: e });
            return c().post(o, { file_type: t, mode: n, start: a, end: i });
          },
        }),
        (m.content = {
          createContent(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT.CREATE_CONTENT, { groupID: e });
            return c().post(n, t);
          },
          getContent(e, t, n) {
            let a = u.makeCompleteUrl(d.CONTENT.GET_CONTENT, {
              groupID: e,
              richTextID: t,
            });
            return c().get(a, { params: n });
          },
          getContents(e) {
            let t = u.makeCompleteUrl(d.CONTENT.GET_CONTENTS);
            return c().get(t, { params: e });
          },
          deleteContent(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT.DELETE_CONTENT, {
              groupID: e,
              richTextID: t,
            });
            return c().delete(n);
          },
          updateContent(e, t, n) {
            let a = u.makeCompleteUrl(d.CONTENT.UPDATE_CONTENT, {
              groupID: e,
              richTextID: t,
            });
            return c().put(a, n);
          },
          getCategory(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT.GET_CATEGORY, {
              groupID: e,
              categoryID: t,
            });
            return c().get(n);
          },
          getCategories(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT.GET_CATEGORIES, { groupID: e });
            return c().get(n, { params: t });
          },
          createCategory(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT.CREATE_CATEGORY, {
              groupID: e,
            });
            return c().post(n, t);
          },
          updateCategory(e, t, n) {
            let a = u.makeCompleteUrl(d.CONTENT.UPDATE_CATEGORY, {
              groupID: e,
              categoryID: t,
            });
            return c().put(a, n);
          },
          deleteCategory(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT.DELETE_CATEGORY, {
              groupID: e,
              categoryID: t,
            });
            return c().delete(n);
          },
        }),
        (m.contentGroup = {
          getContentGroup(e) {
            let t = u.makeCompleteUrl(d.CONTENT_GROUP.GET_CONTENT_GROUP, {
              groupID: e,
            });
            return c().get(t);
          },
          getContentGroups(e) {
            let t = d.CONTENT_GROUP.GET_CONTENT_GROUP_LIST;
            return c().get(t, { params: e });
          },
          getContent(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT_GROUP.GET_CONTNET, {
              groupID: e,
              richTextID: t,
            });
            return c().get(n);
          },
          getContents(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT_GROUP.GET_CONTENTS, {
              groupID: e,
            });
            return c().get(n, { params: t });
          },
          getCategory(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT_GROUP.GET_CATEGORY, {
              groupID: e,
              categoryID: t,
            });
            return c().get(n);
          },
          getCategories(e, t) {
            let n = u.makeCompleteUrl(d.CONTENT_GROUP.GET_CATEGORIES, {
              groupID: e,
            });
            return c().get(n, { params: i({}, t, { limit: 100 }) });
          },
        }),
        (m.file = {
          getFile(e) {
            let t = u.makeCompleteUrl(d.FILE.GET_FILE, { fileID: e });
            return c().get(t);
          },
          getFiles: e => c().get(d.FILE.GET_FILES, { params: e }),
          deleteFile(e) {
            const t = { id__in: e };
            return c().delete(d.FILE.DELETE_FILE, { params: t });
          },
          createDownloadTask: ({
            originalUrl: e,
            filename: t,
            categoryName: n,
            overwrite: a,
          }) =>
            c().post(d.FILE.DOWNLOAD_FILE, {
              original_url: e,
              filename: t,
              category_name: n,
              overwrite: a,
            }),
          getDownloadTaskResult: e => c().get(`${d.FILE.DOWNLOAD_FILE}/${e}/`),
          createCategory(e) {
            let t = u.makeCompleteUrl(d.FILE.CREATE_CATEGORY);
            return c().post(t, e);
          },
          updateCategory(e, t) {
            let n = u.makeCompleteUrl(d.FILE.UPDATE_CATEGORY, {
              categoryID: e,
            });
            return c().put(n, t);
          },
          deleteCategory(e) {
            let t = u.makeCompleteUrl(d.FILE.DELETE_CATEGORY, {
              categoryID: e,
            });
            return c().delete(t);
          },
          getCategory(e) {
            let t = u.makeCompleteUrl(d.FILE.GET_CATEGORY, { categoryID: e });
            return c().get(t);
          },
          getCategories: e => c().get(d.FILE.GET_CATEGORIES, { params: e }),
          getUploadFileConfig: e => c().post(d.FILE.GET_UPLOAD_CONFIG, e),
          purgeCache: (e, t) =>
            c().post(d.FILE.PURGE_CACHE, { operation_type: e, content: t }),
          getPurgeCacheHistory(e = {}) {
            let t = c();
            return (
              (e.operation_type = e.operationType),
              delete e.operationType,
              t.get(d.FILE.PURGE_CACHE, { params: e })
            );
          },
          /**
           * 使用 formData 上传文件
           * @param {Buffer|String} uploadFile
           * @param fileMeta 如果是用户使用 Buffer 构建文件内容，这里可以指定文件 meta 信息
           */
          uploadFile(
            e,
            t = {
              category_id: '',
              random_file_link: !0,
              filename: 'file.bin',
              filepath: '/tmp.file.bin',
              contentType: 'application/octet-stream',
            },
          ) {
            let n = c(),
              a = new l(),
              i = null;
            return new Promise((o, s) => {
              let c = ''; // 用 Buffer 创建文件内容
              if (e instanceof Buffer)
                (c = t.filename),
                  (i = m.file.getUploadFileConfig({
                    filename: c,
                    category_id: t.category_id,
                    random_file_link: t.random_file_link,
                  })),
                  a.append('file', Buffer.from(e), t);
              else {
                if ('string' != typeof e)
                  return s(new Error('invalid uploadFile'));
                (c = t.filename || e),
                  (i = new Promise((n, i) => {
                    r.access(e, o => {
                      if (o) return i(o);
                      let s = m.file.getUploadFileConfig({
                        filename: c,
                        category_id: t.category_id,
                        random_file_link: t.random_file_link,
                      });
                      a.append('file', r.createReadStream(e)), n(s);
                    });
                  }));
              }
              i.then(e => {
                let {
                  upload_url: t,
                  policy: i,
                  authorization: r,
                  id: s,
                  created_at: p,
                  path: u,
                } = e.data;
                return (
                  a.append('policy', i),
                  a.append('authorization', r),
                  n.post(t, a, { headers: a.getHeaders() }).then(e => {
                    (e.data = {
                      id: s,
                      file_link: u,
                      // 兼容 v2.3.0
                      path: u,
                      // 与 js sdk 保持一致
                      file: {
                        id: s,
                        path: u,
                        created_at: p,
                        name: c,
                        mime_type: e.data.mimetype,
                        cdn_path: e.data.url,
                        size: e.data.file_size,
                      },
                    }),
                      o(e);
                  })
                );
              }).catch(e => {
                s(e);
              });
            });
          },
        }),
        (m.user = {
          getUser(e, t = {}) {
            let n = u.makeCompleteUrl(d.USER.GET_USER, { userID: e });
            return c().get(n, t);
          },
          getUsers(e) {
            let t = u.makeCompleteUrl(d.USER.GET_USERS);
            return c().get(t, { params: e });
          },
          updateUser(e, t) {
            let n = u.makeCompleteUrl(d.USER.UPDATE_USER, { userID: e });
            return c().put(n, t);
          },
          createUser(e) {
            let t = d.USER.CREATE_USER;
            return c().post(t, e);
          },
          updateBatchUser(e, t) {
            let n = d.USER.UPDATE_BATCH_USER;
            return c().put(n, t, { params: e });
          },
          deleteUser(e) {
            let t = u.makeCompleteUrl(d.USER.DELETE_USER, { userID: e });
            return c().delete(t);
          },
          setAccount(e, t) {
            let n = u.isCurrentVersion('>2.x')
                ? d.USER.SET_ACCOUNT_V2
                : d.USER.SET_ACCOUNT,
              a = u.makeCompleteUrl(n, { userID: e });
            return c().put(a, t);
          },
        }),
        (m.userGroup = {
          getUserGroup(e) {
            let t = u.makeCompleteUrl(d.USER_GROUP.USER_GROUP, { id: e });
            return c().get(t);
          },
          getUserGroupList: (e = {}) =>
            c().get(d.USER_GROUP.USER_GROUPS, { params: e }),
          createUserGroup: e => c().post(d.USER_GROUP.USER_GROUPS, e),
          updateUserGroup(e, t) {
            let n = c(),
              a = u.makeCompleteUrl(d.USER_GROUP.USER_GROUP, { id: e });
            return n.put(a, t);
          },
          deleteUserGroup: e =>
            c().delete(d.USER_GROUP.USER_GROUPS, { params: e }),
          memberShip: ({
            op: e,
            path: t = '/membership',
            users: n,
            groups: a,
          }) =>
            c().patch(d.USER_GROUP.MEMBERSHIP, [
              { op: e, users: n, path: t, groups: a },
            ]),
        }),
        (m.superGroup = {
          getSuperGroup(e) {
            let t = u.makeCompleteUrl(d.SUPER_GROUP.SUPER_GROUP, { id: e });
            return c().get(t);
          },
          getSuperGroupList: (e = {}) =>
            c().get(d.SUPER_GROUP.SUPER_GROUPS, { params: e }),
          createSuperGroup: e => c().post(d.SUPER_GROUP.SUPER_GROUPS, e),
          updateSuperGroup(e, t) {
            let n = c(),
              a = u.makeCompleteUrl(d.SUPER_GROUP.SUPER_GROUP, { id: e });
            return n.put(a, t);
          },
          deleteSuperGroup: e =>
            c().delete(d.SUPER_GROUP.SUPER_GROUPS, { params: e }),
        }),
        (m.invokeFunction = function (e, t, n) {
          let a = u.makeCompleteUrl(d.CLOUD_FUNCTION, { functionName: e }),
            i = { data: t, sync: n };
          return c().post(a, i);
        }),
        (m.sendEmail = function (e) {
          return c().post(d.EMAIL, e);
        }),
        (m.sendTemplateMessage = function (e) {
          return c().post(d.TEMPLATE_MESSAGE, e);
        }),
        (m.getOrderList = function (e) {
          return c().get(d.GET_ORDER, { params: e });
        }),
        (m.getWechatLivestreamingRoomList = function (e, t) {
          return c().post(d.WECHAT.LIVESTREAMING_GET_ROOM_LIST, {
            start: e,
            limit: t,
          });
        }),
        (m.getWechatLivestreamingPlaybackList = function (e, t, n) {
          return c().post(d.WECHAT.LIVESTREAMING_GET_PLAYBACK_LIST, {
            room_id: e,
            start: t,
            limit: n,
          });
        }),
        /**
         * 手机号充值
         */
        (m.getMobileTopUpList = function (e = {}) {
          return c().get(d.MOBILE_TOP_UP, { params: e });
        }),
        (m.topUpMobile = function (e) {
          return c().post(d.MOBILE_TOP_UP, e);
        }),
        /**
         * 传入身份证和姓名
         * @param {*} data
         */
        (m.peopleAlive = function (e) {
          return c().post(d.PEOPLE_ALIVE, e);
        }),
        /**
         * 微信分账
         */
        (m.wechatPayProfitSharing = function (e) {
          let t = c();
          return (
            (e.payment_order_trade_no = e.trade_no),
            delete e.trade_no,
            t.post(d.WECHAT_PROFIT_SHARING, e)
          );
        }),
        (m.wechatPayMultiProfitSharing = function (e) {
          let t = c();
          return (
            (e.payment_order_trade_no = e.trade_no),
            delete e.trade_no,
            t.post(d.WECHAT_MULTI_PROFIT_SHARING, e)
          );
        }),
        (m.wechatProfitSharingAddReceiver = function (e) {
          return c().post(d.WECHAT_PROFIT_SHARING_ADD_RECEIVER, e);
        }),
        (m.wechatProfitSharingRemoveReceiver = function (e) {
          return c().post(d.WECHAT_PROFIT_SHARING_REMOVE_RECEIVER, e);
        }),
        (m.getWechatProfitSharingOrderList = function (e) {
          return c().get(d.GET_PROFIT_SHARING_ORDER_LIST, {
            params: i({}, e, {
              gateway_type: s.PROFIT_SHARING_GATEWAY_TYPE.WECHAT,
            }),
          });
        }),
        (m.getWechatProfitSharingRefundmentOrder = function (e) {
          return c().post(d.GET_WECHAT_PROFIT_SHARING_REFUNDMENT_ORDER, e);
        }),
        (m.wechatProfitSharingFinish = function (e) {
          let t = c();
          return (
            (e.payment_order_trade_no = e.trade_no),
            delete e.trade_no,
            t.post(d.WECHAT_PROFIT_SHARING_ORDER_FINISH, e)
          );
        }),
        (m.wechatProfitSharingRefund = function (e) {
          return c().post(d.WECHAT_PROFIT_SHARING_ORDER_REFUND, e);
        }),
        /**
         * 支付宝分账
         */
        (m.alipayProfitSharing = function (e) {
          let t = c();
          return (
            (e.payment_order_trade_no = e.trade_no),
            delete e.trade_no,
            t.post(d.ALIPAY_PROFIT_SHARING, e)
          );
        }),
        (m.getAlipayProfitSharingOrderList = function (e) {
          return c().get(d.GET_PROFIT_SHARING_ORDER_LIST, {
            params: i({}, e, {
              gateway_type: s.PROFIT_SHARING_GATEWAY_TYPE.ALIPAY,
            }),
          });
        }),
        (m.alipayProfitSharingAddReceiver = function (e) {
          return c().post(d.ALIPAY_PROFIT_SHARING_ADD_RECEIVER, e);
        }),
        (m.alipayProfitSharingRemoveReceiver = function (e) {
          return c().post(d.ALIPAY_PROFIT_SHARING_REMOVE_RECEIVER, e);
        }),
        (m.alipayProfitSharingReceiverQuery = function (e) {
          return c().post(d.ALIPAY_PROFIT_SHARING_RECEIVER_QUERY, e);
        }),
        (m.refund = function (e) {
          return c().post(d.REFUND, e);
        }),
        (m.getEncryptedAccessToken = function () {
          return c().get(d.ACCESS_TOKEN);
        }),
        (m.wxCensorText = function (e) {
          return c().post(d.CENSOR_MSG, e);
        }),
        (m.wxCensorImage = function (e) {
          return c().post(d.CENSOR_IMAGE, e);
        }),
        (m.wxDecryptData = function (e) {
          let t = c();
          const { encryptedData: n, iv: a, type: i, userID: o } = e;
          let r = u.makeCompleteUrl(d.WECHAT.DECRYPT_DATA, { type: i });
          return t.post(r, { encryptedData: n, iv: a, user_id: o });
        }),
        (m.qqCensorText = function (e) {
          return c().post(d.QQ.CENSOR_MSG, e);
        }),
        (m.alipayCensorText = function (e) {
          return c().post(d.ALIPAY.CENSOR_MSG, e);
        }),
        (m.qqCensorImage = function (e) {
          return c().post(d.QQ.CENSOR_IMAGE, e);
        }),
        (m.wxPromotionTransfer = function (e) {
          let t = c(),
            n = {
              openid: e.openid,
              user_id: e.userID,
              amount: e.amount,
              description: e.description,
              check_name: e.checkName,
              re_user_name: e.reUserName,
              gateway_type: e.gatewayType,
            };
          return t.post(d.PROMOTION_TRANSFER, n);
        }),
        (m.sendSmsCode = function (e) {
          let t = c(),
            n = u.adaptParams(e);
          return t.post(d.SEND_SMS_CODE, n);
        }),
        (m.sendSmsMessage = function (e) {
          let t = c(),
            n = u.adaptParams(e);
          return t.post(d.SEND_SMS_MESSAGE, n);
        }),
        (m.verifySmsCode = function ({ phone: e, code: t, userID: n }) {
          let a = { phone: e, code: t, user_id: n };
          return c().post(d.VERIFY_SMS_CODE, a);
        }),
        (m.updateWeChatUserInfo = function (e) {
          return c().put(d.UPDATE_WECHAT_USER_INFO, e);
        }),
        (m.getWXACode = function (e, t, n, a) {
          let i = u.makeWXACodeRealParams(e, t, n, a);
          return c().post(d.WXACODE, i);
        }),
        (m.getAlipayQRCode = function ({
          name: e,
          urlParam: t,
          queryParam: n,
          describe: a,
        }) {
          let i = { name: e, url_param: t, query_param: n, describe: a };
          return c()
            .post(d.ALIPAY.MINIAPP_QR_CODE, i)
            .then(e => e.data);
        }),
        (m.getBytedanceQRCode = function ({
          appName: e,
          path: t,
          platform: n,
          width: a,
          lineColor: i,
          background: o,
          setIcon: r,
          categoryName: s,
          categoryId: p,
        }) {
          let u = {
            appname: e,
            path: t,
            platform: n,
            width: a,
            line_color: i,
            background: o,
            set_icon: r,
            category_name: s,
            category_id: p,
          };
          return c()
            .post(d.BYTEDANCE.MINIAPP_QR_CODE, u)
            .then(e => e.data);
        }),
        (m.getTemplateMsgTicketCount = function (e = {}) {
          let t = {
            submission_type: e.submissionType,
            user_id: e.userID,
            platform: e.platform,
          };
          return c()
            .get(d.TEMPLATE_MESSAGE_TICKET, { params: t })
            .then(e => e.data.meta.total_count);
        }),
        (m.sendSubscribeMessage = function (e) {
          return c().post(d.SEND_SUBSCRIBE_MESSAGE, e);
        }),
        (m.getSubscribeMsgTicketCount = function (e = {}) {
          let t = {
            subscription_type: e.subscriptionType,
            user_id: e.userID,
            platform: e.platform,
            template_id: e.templateID,
          };
          return c()
            .get(d.SUBSCRIBE_MESSAGE_TICKET, { params: t })
            .then(e => e.data.meta.total_count);
        }),
        (m.redPack = {
          send: e => c().post(d.REDPACK.GET_REDPACKS, e),
          get(e) {
            let t = c(),
              n = u.makeCompleteUrl(d.REDPACK.GET_REDPACK, { id: e });
            return t.get(n);
          },
          getList: e => c().get(d.REDPACK.GET_REDPACKS, { params: e }),
          getStatus: e => c().get(d.REDPACK.GET_REDPACK_INFO, { params: e }),
        }),
        (m.getAsyncJobResult = function (e) {
          let t = u.makeCompleteUrl(d.GET_ASYNC_JOB_RESULT, { id: e });
          return c().get(t);
        }),
        (m.getServerDate = function () {
          let e = d.GET_SERVER_TIME;
          return c().get(e);
        }),
        (m.urlScheme = {
          getUrlSchemes(e = {}) {
            let t = d.URL_SCHEME.GET_URL_SCHEMES;
            return c().get(t, { params: e });
          },
          getUrlScheme(e) {
            let t = u.makeCompleteUrl(d.URL_SCHEME.GET_URL_SCHEME, { id: e });
            return c().get(t);
          },
          createUrlScheme(e) {
            let t = d.URL_SCHEME.CREATE_URL_SCHEME;
            return c().post(t, e);
          },
          deleteUrlScheme(e) {
            let t = u.makeCompleteUrl(d.URL_SCHEME.DELETE_URL_SCHEME, {
              id: e,
            });
            return c().delete(t);
          },
        }),
        (m.getWxUserRiskRank = function (e) {
          const {
              openid: t,
              scene: n,
              clientIP: a,
              mobileNo: i,
              emailAddress: o,
              extendedInfo: r,
            } = e,
            s = {
              openid: t,
              scene: n,
              client_ip: a,
              mobile_no: i,
              email_address: o,
              extended_info: r,
            };
          return c().post(d.WECHAT.GET_USER_RISK_RANK, s);
        }),
        (m.createWxActivityID = function (e) {
          return c().post(d.WECHAT.PRIVATE_MESSAGE, e);
        }),
        (e.exports = m);
    },
    /* 1 */
    /***/ function (e, t, n) {
      const a = n(5),
        i = n(11),
        o = n(6),
        r = n(113),
        s = n(13);
      e.exports = class {
        constructor() {
          this._initQueryParams();
        }
        _initQueryParams() {
          (this._queryObject = {}),
            (this._limit = null),
            (this._offset = 0),
            (this._orderBy = null),
            (this._keys = null),
            (this._expand = null);
        }
        setQuery(e) {
          if (!(e instanceof i)) throw new a(605);
          return (this._queryObject = o(e.queryObject)), this;
        }
        select(e) {
          return (
            e instanceof Array ? (this._keys = e.join(',')) : (this._keys = e),
            this
          );
        }
        expand(e) {
          return (
            e instanceof Array
              ? (this._expand = e.join(','))
              : (this._expand = e),
            this
          );
        }
        limit(e) {
          if (!r(e)) throw new a(605);
          return (this._limit = e), this;
        }
        offset(e) {
          if (!r(e)) throw new a(605);
          return (this._offset = e), this;
        }
        orderBy(e) {
          return (
            e instanceof Array
              ? (this._orderBy = e.join(','))
              : (this._orderBy = e),
            this
          );
        }
        _handleAllQueryConditions() {
          let e = {};
          return (
            (e.limit =
              null === this._limit ? s.QUERY_LIMITATION_DEFAULT : this._limit),
            (e.offset = this._offset),
            this._orderBy && (e.order_by = this._orderBy),
            this._keys && (e.keys = this._keys),
            this._expand && (e.expand = this._expand),
            (e.where = JSON.stringify(this._queryObject)),
            e
          );
        }
      };
    },
    /* 2 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(31),
        i = n(61),
        o = Object.prototype.toString;
      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */
      function r(e) {
        return '[object Array]' === o.call(e);
      }
      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
      function s(e) {
        return null !== e && 'object' == typeof e;
      }
      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */
      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
      function c(e) {
        return '[object Function]' === o.call(e);
      }
      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
      function p(e, t) {
        // Don't bother if no value provided
        if (null !== e && void 0 !== e)
          if (
            // Force an array if not already something iterable
            ('object' != typeof e &&
              /*eslint no-param-reassign:0*/
              (e = [e]),
            r(e))
          )
            // Iterate over array values
            for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
          // Iterate over object keys
          else
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                t.call(null, e[i], i, e);
      }
      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */ e.exports = {
        isArray: r,
        isArrayBuffer: function (e) {
          return '[object ArrayBuffer]' === o.call(e);
        },
        /**
         * Determine if a value is a FormData
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is an FormData, otherwise false
         */ isBuffer: i,
        isFormData: function (e) {
          return 'undefined' != typeof FormData && e instanceof FormData;
        },
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */ isArrayBufferView: function (e) {
          return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        /**
         * Determine if a value is a String
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a String, otherwise false
         */ isString: function (e) {
          return 'string' == typeof e;
        },
        /**
         * Determine if a value is a Number
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Number, otherwise false
         */ isNumber: function (e) {
          return 'number' == typeof e;
        },
        /**
         * Determine if a value is undefined
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if the value is undefined, otherwise false
         */ isObject: s,
        isUndefined: function (e) {
          return void 0 === e;
        },
        isDate: function (e) {
          return '[object Date]' === o.call(e);
        },
        /**
         * Determine if a value is a File
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a File, otherwise false
         */ isFile: function (e) {
          return '[object File]' === o.call(e);
        },
        /**
         * Determine if a value is a Blob
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a Blob, otherwise false
         */ isBlob: function (e) {
          return '[object Blob]' === o.call(e);
        },
        isFunction: c,
        isStream: function (e) {
          return s(e) && c(e.pipe);
        },
        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */ isURLSearchParams: function (e) {
          return (
            'undefined' != typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         * @returns {String} The String freed of excess whitespace
         */ isStandardBrowserEnv:
          /**
           * Determine if we're running in a standard browser environment
           *
           * This allows axios to run in a web worker, and react-native.
           * Both environments support XMLHttpRequest, but not fully standard globals.
           *
           * web workers:
           *  typeof window -> undefined
           *  typeof document -> undefined
           *
           * react-native:
           *  navigator.product -> 'ReactNative'
           */
          function () {
            return (
              ('undefined' == typeof navigator ||
                'ReactNative' !== navigator.product) &&
              'undefined' != typeof window &&
              'undefined' != typeof document
            );
          },
        forEach: p,
        merge: function e() {
          var t = {};
          function n(n, a) {
            'object' == typeof t[a] && 'object' == typeof n
              ? (t[a] = e(t[a], n))
              : (t[a] = n);
          }
          for (var a = 0, i = arguments.length; a < i; a++) p(arguments[a], n);
          return t;
        },
        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         * @return {Object} The resulting value of object a
         */ extend: function (e, t, n) {
          return (
            p(t, function (t, i) {
              e[i] = n && 'function' == typeof t ? a(t, n) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.replace(/^\s*/, '').replace(/\s*$/, '');
        },
      };
    },
    /* 3 */
    /***/ function (e, t, n) {
      const a = n(95),
        i = n(5),
        o = n(13),
        r = n(41),
        s = n(42),
        c = (e, t) => r.satisfies(r.coerce(e), t),
        p = () => s.versions.v3;
      e.exports = {
        makeCompleteUrl: (e, t) => e.replace(/:(\w*)/g, (e, n) => t[n]),
        /**
         * aes 解密
         * @param {String} key base64 编码后的的密钥 eg:DZrSlXBWHTYqtzQObkXojlJpjFQgTAzM
         * @param {String} iv base64 编码后的的随机向量 eg:WHuBMbZbvnjCFTCq
         * @param {String} data base64 编码后的的加密文本
         * @return {*}
         * @example
         * console.log(aes256cbcDecrypt("DZrSlXBWHTYqtzQObkXojlJpjFQgTAzM", "WHuBMbZbvnjCFTCq", "xZR4G0dhlSV86sC8rGB7pQ=="))
         * @description
         * 注意：nodejs 默认 padding 为 PKCS#7，而 access_token 的 padding 为 ZeroPadding，因此需要 setAutoPadding(false)
         */
        aes256cbcDecrypt(e, t, n) {
          let i = a.createDecipheriv('aes-256-cbc', e, t).setAutoPadding(!1);
          return [i.update(n, 'base64', 'utf-8'), i.final('utf-8')]
            .join('')
            .replace(/\x00+$/, ''); // eslint-disable-line
        },
        getTimestamp(e) {
          if (
            ((e =
              e instanceof Date
                ? parseInt(e.getTime() / 1e3)
                : parseInt(new Date(e).getTime() / 1e3)),
            isNaN(e))
          )
            throw new Error('Invalid Date Object');
          return e;
        },
        isString: e => '[object String]' === Object.prototype.toString.call(e),
        makeWXACodeRealParams(e, t, n, a) {
          let o = {};
          const r = ['wxacode', 'wxacodeunlimit', 'wxaqrcode'].indexOf(e);
          if (!this.isString(e) || -1 === r)
            throw new i(
              605,
              'type 为字符串类型且只接受 "wxacode", "wxacodeunlimit", "wxaqrcode" 其中一种',
            );
          if (
            ((o.code_type = [
              'miniapp_permanent',
              'miniapp_temporary',
              'miniapp_qr',
            ][r]),
            !t || t.constructor !== Object)
          )
            throw new i(605, 'params 为 Object 类型');
          if ('wxacode' === e || 'wxaqrcode' === e) {
            if (!t.hasOwnProperty('path'))
              throw new i(
                605,
                '当 type 为 "wxacode" 或 "wxaqrcode" 时，params 中必须带有 "path" 属性',
              );
            o.path = t.path;
          }
          if ('wxacodeunlimit' === e) {
            if (!t.hasOwnProperty('scene'))
              throw new i(
                605,
                '当 type 为 "wxacodeunlimit" 时，params 中必须带有 "scene" 属性',
              );
            (o.scene = t.scene), t.hasOwnProperty('page') && (o.path = t.page);
          }
          return (
            (o.options = {}),
            t.hasOwnProperty('width') && (o.options.width = t.width),
            t.hasOwnProperty('auto_color') &&
              (o.options.auto_color = t.auto_color),
            t.hasOwnProperty('line_color') &&
              (o.options.line_color = t.line_color),
            t.hasOwnProperty('is_hyaline') &&
              (o.options.is_hyaline = t.is_hyaline),
            !0 === n && ((o.upload_to_cdn = !0), a && (o.category_name = a)),
            o
          );
        },
        normalizeTemplageMsgParams: e => (
          (e.submissionType = e.submissionType || e.submission_type),
          'formId' == e.submissionType && (e.submissionType = 'form_id'),
          ('tradeNo' != e.submissionType &&
            'trade_no' != e.submissionType &&
            'orderId' != e.submissionType &&
            'order_id' != e.submissionType &&
            'prepayId' != e.submissionType) ||
            (e.submissionType = 'prepay_id'),
          (e.submission_type = e.submissionType),
          e
        ),
        adaptParams(e) {
          let t = {
              signatureID: 'signature_id',
              userID: 'user_id',
              templateID: 'template_id',
              templateName: 'template_name',
              recipientType: 'recipient_type',
              userList: 'user_list',
              userGroup: 'user_group',
              schemaUser: 'schema_user',
            },
            n = {};
          for (let a in e) t[a] ? (n[t[a]] = e[a]) : (n[a] = e[a]);
          return n;
        },
        getLimitationWithEnableTigger: (e, t) =>
          // 设置了 limit，直接返回
          null !== e && void 0 !== e
            ? e // 如果触发触发器，则默认添加限制
            : t
            ? o.QUERY_LIMITATION_DEFAULT
            : void 0,
        /**
         * @see semver.satisfies {@link https://www.npmjs.com/package/semver}
         */
        isVersionSatisfies: c,
        getCurrentVersion: p,
        isCurrentVersion: e => c(p(), e),
        getWithCountDefaultValue: () => c(p(), '2.x'),
        snakeCaseToCamelCase: e =>
          e
            .split('_')
            .map((e, t) => (t > 0 ? e.replace(/^\w/, e => e.toUpperCase()) : e))
            .join(''),
      };
    },
    /* 4 */
    /***/ function (e, t) {
      e.exports = require('util');
      /***/
    },
    /* 5 */
    /***/ function (e, t) {
      e.exports = class {
        constructor(e, t) {
          let n = new Error();
          return (
            (n.code = e),
            (n.message = t ? `${e}: ${t}` : `${e}: ${this.mapErrorMessage(e)}`),
            n
          );
        } // 前端错误信息定义
        mapErrorMessage(e) {
          switch (e) {
            case 600:
              return 'network disconnected';
            case 601:
              return 'request timeout';
            case 602:
              return 'uninitialized';
            // 未调用 BaaS.init()
            case 603:
              return 'unauthorized';
            // 用户尚未授权
            case 604:
              return 'session missing';
            // 用户尚未登录
            case 605:
              return 'incorrect parameter type';
            case 607:
              return 'payment cancelled';
            case 608:
              return 'payment failed';
            // error message 会被重写为微信返回的错误信息
            case 609:
              return 'save failed';
            // 无法调用 UserRecord.save 接口
            default:
              return 'unknown error';
          }
        }
      };
    },
    /* 6 */
    /***/ function (e, t, n) {
      /* WEBPACK VAR INJECTION */ (function (e) {
        /**
         * lodash (Custom Build) <https://lodash.com/>
         * Build: `lodash modularize exports="npm" -o ./`
         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */
        /** Used as the size to enable large array optimizations. */
        var n = 200,
          a = '__lodash_hash_undefined__',
          i = 9007199254740991,
          o = '[object Arguments]',
          r = '[object Boolean]',
          s = '[object Date]',
          c = '[object Function]',
          p = '[object GeneratorFunction]',
          u = '[object Map]',
          l = '[object Number]',
          d = '[object Object]',
          m = '[object Promise]',
          f = '[object RegExp]',
          h = '[object Set]',
          v = '[object String]',
          x = '[object Symbol]',
          g = '[object WeakMap]',
          b = '[object ArrayBuffer]',
          y = '[object DataView]',
          E = '[object Float32Array]',
          _ = '[object Float64Array]',
          w = '[object Int8Array]',
          O = '[object Int16Array]',
          T = '[object Int32Array]',
          R = '[object Uint8Array]',
          C = '[object Uint8ClampedArray]',
          A = '[object Uint16Array]',
          S = '[object Uint32Array]',
          k = /\w*$/,
          I = /^\[object .+?Constructor\]$/,
          j = /^(?:0|[1-9]\d*)$/,
          P = {};
        /** Used to stand-in for `undefined` hash values. */ (P[o] =
          P['[object Array]'] =
          P[b] =
          P[y] =
          P[r] =
          P[s] =
          P[E] =
          P[_] =
          P[w] =
          P[O] =
          P[T] =
          P[u] =
          P[l] =
          P[d] =
          P[f] =
          P[h] =
          P[v] =
          P[x] =
          P[R] =
          P[C] =
          P[A] =
          P[S] =
            !0),
          (P['[object Error]'] = P[c] = P[g] = !1);
        /** Detect free variable `global` from Node.js. */
        var D =
            'object' == typeof global &&
            global &&
            global.Object === Object &&
            global,
          L = 'object' == typeof self && self && self.Object === Object && self,
          N = D || L || Function('return this')(),
          U = 'object' == typeof t && t && !t.nodeType && t,
          M = U && 'object' == typeof e && e && !e.nodeType && e,
          G = M && M.exports === U;
        /** Detect free variable `self`. */
        /**
         * Adds the key-value `pair` to `map`.
         *
         * @private
         * @param {Object} map The map to modify.
         * @param {Array} pair The key-value pair to add.
         * @returns {Object} Returns `map`.
         */
        function F(e, t) {
          // Don't return `map.set` because it's not chainable in IE 11.
          return e.set(t[0], t[1]), e;
        }
        /**
         * Adds `value` to `set`.
         *
         * @private
         * @param {Object} set The set to modify.
         * @param {*} value The value to add.
         * @returns {Object} Returns `set`.
         */ function q(e, t) {
          // Don't return `set.add` because it's not chainable in IE 11.
          return e.add(t), e;
        }
        /**
         * A specialized version of `_.forEach` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns `array`.
         */
        /**
         * A specialized version of `_.reduce` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @param {boolean} [initAccum] Specify using the first element of `array` as
         *  the initial value.
         * @returns {*} Returns the accumulated value.
         */
        function z(e, t, n, a) {
          var i = -1,
            o = e ? e.length : 0;
          for (a && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
          return n;
        }
        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */
        function B(e) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var t = !1;
          if (null != e && 'function' != typeof e.toString)
            try {
              t = !!(e + '');
            } catch (e) {}
          return t;
        }
        /**
         * Converts `map` to its key-value pairs.
         *
         * @private
         * @param {Object} map The map to convert.
         * @returns {Array} Returns the key-value pairs.
         */ function H(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, a) {
              n[++t] = [a, e];
            }),
            n
          );
        }
        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */ function Q(e, t) {
          return function (n) {
            return e(t(n));
          };
        }
        /**
         * Converts `set` to an array of its values.
         *
         * @private
         * @param {Object} set The set to convert.
         * @returns {Array} Returns the values.
         */ function $(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        /** Used for built-in method references. */ var V,
          W = Array.prototype,
          Y = Function.prototype,
          X = Object.prototype,
          K = N['__core-js_shared__'],
          J = (V = /[^.]+$/.exec((K && K.keys && K.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + V
            : '',
          Z = Y.toString,
          ee = X.hasOwnProperty,
          te = X.toString,
          ne = RegExp(
            '^' +
              Z.call(ee)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?',
                ) +
              '$',
          ),
          ae = G ? N.Buffer : void 0,
          ie = N.Symbol,
          oe = N.Uint8Array,
          re = Q(Object.getPrototypeOf, Object),
          se = Object.create,
          ce = X.propertyIsEnumerable,
          pe = W.splice,
          ue = Object.getOwnPropertySymbols,
          le = ae ? ae.isBuffer : void 0,
          de = Q(Object.keys, Object),
          me = Me(N, 'DataView'),
          fe = Me(N, 'Map'),
          he = Me(N, 'Promise'),
          ve = Me(N, 'Set'),
          xe = Me(N, 'WeakMap'),
          ge = Me(Object, 'create'),
          be = Be(me),
          ye = Be(fe),
          Ee = Be(he),
          _e = Be(ve),
          we = Be(xe),
          Oe = ie ? ie.prototype : void 0,
          Te = Oe ? Oe.valueOf : void 0;
        /** Used to detect overreaching core-js shims. */
        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Re(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
          }
        }
        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Ce(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
          }
        }
        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Ae(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
          }
        }
        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Se(e) {
          this.__data__ = new Ce(e);
        }
        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */
        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function ke(e, t) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          // Safari 9 makes `arguments.length` enumerable in strict mode.
          var n,
            a,
            i,
            r =
              Qe(e) ||
              ((i = a = n = e) &&
                'object' == typeof i &&
                $e(a) &&
                ee.call(n, 'callee') &&
                (!ce.call(n, 'callee') || te.call(n) == o))
                ? (function (e, t) {
                    for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
                    return a;
                  })(
                    /**
                     * Gets the value at `key` of `object`.
                     *
                     * @private
                     * @param {Object} [object] The object to query.
                     * @param {string} key The key of the property to get.
                     * @returns {*} Returns the property value.
                     */ e.length,
                    String,
                  )
                : [],
            s = r.length,
            c = !!s;
          for (var p in e)
            (!t && !ee.call(e, p)) ||
              (c && ('length' == p || qe(p, s))) ||
              r.push(p);
          return r;
        }
        /**
         * Assigns `value` to `key` of `object` if the existing value is not equivalent
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */ function Ie(e, t, n) {
          var a = e[t];
          (ee.call(e, t) && He(a, n) && (void 0 !== n || t in e)) || (e[t] = n);
        }
        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */ function je(e, t) {
          for (var n = e.length; n--; ) if (He(e[n][0], t)) return n;
          return -1;
        }
        /**
         * The base implementation of `_.assign` without support for multiple sources
         * or `customizer` functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @returns {Object} Returns `object`.
         */
        /**
         * The base implementation of `_.clone` and `_.cloneDeep` which tracks
         * traversed objects.
         *
         * @private
         * @param {*} value The value to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @param {boolean} [isFull] Specify a clone including symbols.
         * @param {Function} [customizer] The function to customize cloning.
         * @param {string} [key] The key of `value`.
         * @param {Object} [object] The parent object of `value`.
         * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
         * @returns {*} Returns the cloned value.
         */
        function Pe(e, t, n, a, i, m, g) {
          var I;
          if ((a && (I = m ? a(e, i, m, g) : a(e)), void 0 !== I)) return I;
          if (!Ye(e)) return e;
          var j,
            D,
            L,
            N,
            U,
            M,
            G = Qe(e);
          if (G) {
            if (
              ((I =
                /**
                 * Initializes an array clone.
                 *
                 * @private
                 * @param {Array} array The array to clone.
                 * @returns {Array} Returns the initialized clone.
                 */
                (function (e) {
                  var t = e.length,
                    n = e.constructor(t);
                  // Add properties assigned by `RegExp#exec`.
                  t &&
                    'string' == typeof e[0] &&
                    ee.call(e, 'index') &&
                    ((n.index = e.index), (n.input = e.input));
                  return n;
                })(
                  /**
                   * Initializes an object clone.
                   *
                   * @private
                   * @param {Object} object The object to clone.
                   * @returns {Object} Returns the initialized clone.
                   */ e,
                )),
              !t)
            )
              /**
               * Copies the values of `source` to `array`.
               *
               * @private
               * @param {Array} source The array to copy values from.
               * @param {Array} [array=[]] The array to copy values to.
               * @returns {Array} Returns `array`.
               */
              return (function (e, t) {
                var n = -1,
                  a = e.length;
                t || (t = Array(a));
                for (; ++n < a; ) t[n] = e[n];
                return t;
              })(
                /**
                 * Copies properties of `source` to `object`.
                 *
                 * @private
                 * @param {Object} source The object to copy properties from.
                 * @param {Array} props The property identifiers to copy.
                 * @param {Object} [object={}] The object to copy properties to.
                 * @param {Function} [customizer] The function to customize copied values.
                 * @returns {Object} Returns `object`.
                 */ e,
                I,
              );
          } else {
            var Q = Fe(e),
              V = Q == c || Q == p;
            if (Ve(e))
              /**
               * Creates a clone of  `buffer`.
               *
               * @private
               * @param {Buffer} buffer The buffer to clone.
               * @param {boolean} [isDeep] Specify a deep clone.
               * @returns {Buffer} Returns the cloned buffer.
               */
              return (function (e, t) {
                if (t) return e.slice();
                var n = new e.constructor(e.length);
                return e.copy(n), n;
              })(
                /**
                 * Creates a clone of `arrayBuffer`.
                 *
                 * @private
                 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
                 * @returns {ArrayBuffer} Returns the cloned array buffer.
                 */ e,
                t,
              );
            if (Q == d || Q == o || (V && !m)) {
              if (B(e)) return m ? e : {};
              if (
                ((I =
                  'function' != typeof (U = V ? {} : e).constructor || ze(U)
                    ? {}
                    : Ye((M = re(U)))
                    ? se(M)
                    : {}),
                !t)
              )
                return (
                  (j = e),
                  (N = e),
                  (D = (L = I) && Ne(N, Xe(N), L)),
                  Ne(j, Ge(j), D)
                );
            } else {
              if (!P[Q]) return m ? e : {};
              I =
                /**
                 * Initializes an object clone based on its `toStringTag`.
                 *
                 * **Note:** This function only supports cloning values with tags of
                 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
                 *
                 * @private
                 * @param {Object} object The object to clone.
                 * @param {string} tag The `toStringTag` of the object to clone.
                 * @param {Function} cloneFunc The function to clone values.
                 * @param {boolean} [isDeep] Specify a deep clone.
                 * @returns {Object} Returns the initialized clone.
                 */
                (function (e, t, n, a) {
                  var i = e.constructor;
                  switch (t) {
                    case b:
                      return Le(e);
                    case r:
                    case s:
                      return new i(+e);
                    case y:
                      return (
                        (j = e),
                        (P = a ? Le(j.buffer) : j.buffer),
                        new j.constructor(P, j.byteOffset, j.byteLength)
                      );
                    case E:
                    case _:
                    case w:
                    case O:
                    case T:
                    case R:
                    case C:
                    case A:
                    case S:
                      return (
                        (g = e),
                        (I = a ? Le(g.buffer) : g.buffer),
                        new g.constructor(I, g.byteOffset, g.length)
                      );
                    case u:
                      return (
                        (m = e),
                        z(a ? n(H(m), !0) : H(m), F, new m.constructor())
                      );
                    case l:
                    case v:
                      return new i(e);
                    case f:
                      return (
                        ((d = new (p = e).constructor(
                          p.source,
                          k.exec(p),
                        )).lastIndex = p.lastIndex),
                        d
                      );
                    case h:
                      return (
                        (c = e),
                        z(a ? n($(c), !0) : $(c), q, new c.constructor())
                      );
                    case x:
                      return (o = e), Te ? Object(Te.call(o)) : {};
                  }
                  /**
                   * Creates a clone of the `symbol` object.
                   *
                   * @private
                   * @param {Object} symbol The symbol object to clone.
                   * @returns {Object} Returns the cloned symbol object.
                   */
                  var o;
                  /**
                   * Creates a clone of `typedArray`.
                   *
                   * @private
                   * @param {Object} typedArray The typed array to clone.
                   * @param {boolean} [isDeep] Specify a deep clone.
                   * @returns {Object} Returns the cloned typed array.
                   */
                  /**
                   * Creates a clone of `set`.
                   *
                   * @private
                   * @param {Object} set The set to clone.
                   * @param {Function} cloneFunc The function to clone values.
                   * @param {boolean} [isDeep] Specify a deep clone.
                   * @returns {Object} Returns the cloned set.
                   */
                  var c;
                  /**
                   * Creates a clone of `regexp`.
                   *
                   * @private
                   * @param {Object} regexp The regexp to clone.
                   * @returns {Object} Returns the cloned regexp.
                   */
                  var p, d;
                  /**
                   * Creates a clone of `map`.
                   *
                   * @private
                   * @param {Object} map The map to clone.
                   * @param {Function} cloneFunc The function to clone values.
                   * @param {boolean} [isDeep] Specify a deep clone.
                   * @returns {Object} Returns the cloned map.
                   */
                  var m;
                  var g, I;
                  /**
                   * Creates a clone of `dataView`.
                   *
                   * @private
                   * @param {Object} dataView The data view to clone.
                   * @param {boolean} [isDeep] Specify a deep clone.
                   * @returns {Object} Returns the cloned data view.
                   */
                  var j, P;
                })(
                  /**
                   * Checks if `value` is a valid array-like index.
                   *
                   * @private
                   * @param {*} value The value to check.
                   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
                   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
                   */ e,
                  Q,
                  Pe,
                  t,
                );
            }
          }
          // Check for circular references and return its corresponding clone.
          g || (g = new Se());
          var W,
            Y,
            X,
            K = g.get(e);
          if (K) return K;
          if ((g.set(e, I), !G))
            var J = n
              ? ((Y = Ge),
                (X = Xe((W = e))),
                Qe(W)
                  ? X
                  : /**
                     * Appends the elements of `values` to `array`.
                     *
                     * @private
                     * @param {Array} array The array to modify.
                     * @param {Array} values The values to append.
                     * @returns {Array} Returns `array`.
                     */
                    (function (e, t) {
                      for (var n = -1, a = t.length, i = e.length; ++n < a; )
                        e[i + n] = t[n];
                      return e;
                    })(X, Y(W)))
              : Xe(e);
          return (
            (function (e, t) {
              for (
                var n = -1, a = e ? e.length : 0;
                ++n < a && !1 !== t(e[n], n, e);

              );
            })(J || e, function (i, o) {
              J && (i = e[(o = i)]),
                // Recursively populate clone (susceptible to call stack limits).
                Ie(I, o, Pe(i, t, n, a, o, e, g));
            }),
            I
          );
        }
        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} prototype The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function De(e) {
          return (
            !(!Ye(e) || (J && J in e)) && (We(e) || B(e) ? ne : I).test(Be(e))
          );
        }
        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */ function Le(e) {
          var t = new e.constructor(e.byteLength);
          return new oe(t).set(new oe(e)), t;
        }
        function Ne(e, t, n, a) {
          n || (n = {});
          for (var i = -1, o = t.length; ++i < o; ) {
            var r = t[i],
              s = a ? a(n[r], e[r], r, n, e) : void 0;
            Ie(n, r, void 0 === s ? e[r] : s);
          }
          return n;
        }
        /**
         * Copies own symbol properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy symbols from.
         * @param {Object} [object={}] The object to copy symbols to.
         * @returns {Object} Returns `object`.
         */
        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function Ue(e, t) {
          var n,
            a,
            i = e.__data__;
          return (
            'string' == (a = typeof (n = t)) ||
            'number' == a ||
            'symbol' == a ||
            'boolean' == a
              ? '__proto__' !== n
              : null === n
          )
            ? i['string' == typeof t ? 'string' : 'hash']
            : i.map;
        }
        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */ function Me(e, t) {
          var n,
            a = null == (n = e) ? void 0 : n[t];
          return De(a) ? a : void 0;
        }
        /**
         * Creates an array of the own enumerable symbol properties of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of symbols.
         */
        // Add methods to `Hash`.
        (Re.prototype.clear = function () {
          this.__data__ = ge ? ge(null) : {};
        }),
          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */ (Re.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */ (Re.prototype.get = function (e) {
            var t = this.__data__;
            if (ge) {
              var n = t[e];
              return n === a ? void 0 : n;
            }
            return ee.call(t, e) ? t[e] : void 0;
          }),
          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */ (Re.prototype.has = function (e) {
            var t = this.__data__;
            return ge ? void 0 !== t[e] : ee.call(t, e);
          }),
          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */ (Re.prototype.set = function (e, t) {
            return (this.__data__[e] = ge && void 0 === t ? a : t), this;
          }),
          // Add methods to `ListCache`.
          (Ce.prototype.clear = function () {
            this.__data__ = [];
          }),
          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */ (Ce.prototype.delete = function (e) {
            var t = this.__data__,
              n = je(t, e);
            return !(
              n < 0 || (n == t.length - 1 ? t.pop() : pe.call(t, n, 1), 0)
            );
          }),
          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */ (Ce.prototype.get = function (e) {
            var t = this.__data__,
              n = je(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */ (Ce.prototype.has = function (e) {
            return je(this.__data__, e) > -1;
          }),
          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */ (Ce.prototype.set = function (e, t) {
            var n = this.__data__,
              a = je(n, e);
            return a < 0 ? n.push([e, t]) : (n[a][1] = t), this;
          }),
          // Add methods to `MapCache`.
          (Ae.prototype.clear = function () {
            this.__data__ = {
              hash: new Re(),
              map: new (fe || Ce)(),
              string: new Re(),
            };
          }),
          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */ (Ae.prototype.delete = function (e) {
            return Ue(this, e).delete(e);
          }),
          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */ (Ae.prototype.get = function (e) {
            return Ue(this, e).get(e);
          }),
          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */ (Ae.prototype.has = function (e) {
            return Ue(this, e).has(e);
          }),
          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */ (Ae.prototype.set = function (e, t) {
            return Ue(this, e).set(e, t), this;
          }),
          // Add methods to `Stack`.
          (Se.prototype.clear = function () {
            this.__data__ = new Ce();
          }),
          /**
           * Removes `key` and its value from the stack.
           *
           * @private
           * @name delete
           * @memberOf Stack
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */ (Se.prototype.delete = function (e) {
            return this.__data__.delete(e);
          }),
          /**
           * Gets the stack value for `key`.
           *
           * @private
           * @name get
           * @memberOf Stack
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */ (Se.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          /**
           * Checks if a stack value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Stack
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */ (Se.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          /**
           * Sets the stack `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Stack
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the stack cache instance.
           */ (Se.prototype.set = function (e, t) {
            var a = this.__data__;
            if (a instanceof Ce) {
              var i = a.__data__;
              if (!fe || i.length < n - 1) return i.push([e, t]), this;
              a = this.__data__ = new Ae(i);
            }
            return a.set(e, t), this;
          });
        var Ge = ue
            ? Q(ue, Object)
            : /**
               * This method returns a new empty array.
               *
               * @static
               * @memberOf _
               * @since 4.13.0
               * @category Util
               * @returns {Array} Returns the new empty array.
               * @example
               *
               * var arrays = _.times(2, _.stubArray);
               *
               * console.log(arrays);
               * // => [[], []]
               *
               * console.log(arrays[0] === arrays[1]);
               * // => false
               */
              function () {
                return [];
              },
          /**
           * This method returns `false`.
           *
           * @static
           * @memberOf _
           * @since 4.13.0
           * @category Util
           * @returns {boolean} Returns `false`.
           * @example
           *
           * _.times(2, _.stubFalse);
           * // => [false, false]
           */ Fe =
            /**
             * The base implementation of `getTag`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */
            function (e) {
              return te.call(e);
            };
        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */ function qe(e, t) {
          return (
            !!(t = null == t ? i : t) &&
            ('number' == typeof e || j.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function ze(e) {
          var t = e && e.constructor;
          return e === (('function' == typeof t && t.prototype) || X);
        }
        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */ function Be(e) {
          if (null != e) {
            try {
              return Z.call(e);
            } catch (e) {}
            try {
              return e + '';
            } catch (e) {}
          }
          return '';
        }
        /**
         * This method is like `_.clone` except that it recursively clones `value`.
         *
         * @static
         * @memberOf _
         * @since 1.0.0
         * @category Lang
         * @param {*} value The value to recursively clone.
         * @returns {*} Returns the deep cloned value.
         * @see _.clone
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var deep = _.cloneDeep(objects);
         * console.log(deep[0] === objects[0]);
         * // => false
         */
        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function He(e, t) {
          return e === t || (e != e && t != t);
        }
        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        // Fallback for data views, maps, sets, and weak maps in IE 11,
        // for data views in Edge < 14, and promises in Node.js.
        ((me && Fe(new me(new ArrayBuffer(1))) != y) ||
          (fe && Fe(new fe()) != u) ||
          (he && Fe(he.resolve()) != m) ||
          (ve && Fe(new ve()) != h) ||
          (xe && Fe(new xe()) != g)) &&
          (Fe = function (e) {
            var t = te.call(e),
              n = t == d ? e.constructor : void 0,
              a = n ? Be(n) : void 0;
            if (a)
              switch (a) {
                case be:
                  return y;
                case ye:
                  return u;
                case Ee:
                  return m;
                case _e:
                  return h;
                case we:
                  return g;
              }
            return t;
          });
        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var Qe = Array.isArray;
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */ function $e(e) {
          return (
            null != e &&
            'number' == typeof (t = e.length) &&
            t > -1 &&
            t % 1 == 0 &&
            t <= i &&
            !We(e)
          );
          /**
           * Checks if `value` is a valid array-like length.
           *
           * **Note:** This method is loosely based on
           * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
           * @example
           *
           * _.isLength(3);
           * // => true
           *
           * _.isLength(Number.MIN_VALUE);
           * // => false
           *
           * _.isLength(Infinity);
           * // => false
           *
           * _.isLength('3');
           * // => false
           */
          var t;
          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */
        }
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */
        var Ve =
          le ||
          function () {
            return !1;
          };
        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */ function We(e) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var t = Ye(e) ? te.call(e) : '';
          return t == c || t == p;
        }
        function Ye(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function Xe(e) {
          return $e(e)
            ? ke(e)
            : (function (e) {
                if (!ze(e)) return de(e);
                var t = [];
                for (var n in Object(e))
                  ee.call(e, n) && 'constructor' != n && t.push(n);
                return t;
              })(e);
        }
        e.exports = function (e) {
          return Pe(e, !0, !0);
        };
      }).call(t, n(108)(e));
      /***/
    },
    /* 7 */
    /***/ function (e, t) {
      e.exports = require('url');
      /***/
    },
    /* 8 */
    /***/ function (e, t) {
      e.exports = require('path');
      /***/
    },
    /* 9 */
    /***/ function (e, t) {
      e.exports = require('fs');
      /***/
    },
    /* 10 */
    /***/ function (e, t) {
      e.exports = require('https');
      /***/
    },
    /* 11 */
    /***/ function (e, t, n) {
      const a = n(15),
        i = n(25),
        o = n(5),
        r = n(26),
        s = n(12)._serializeValueFuncFactory(['BaseRecord']);
      class c {
        constructor() {
          this.queryObject = {};
        }
        static and(...e) {
          let t = new c(),
            n = { $and: [] };
          return (
            e.forEach(function (e) {
              n.$and.push(e.queryObject);
            }),
            t._setQueryObject(n),
            t
          );
        }
        static or(...e) {
          let t = new c(),
            n = { $or: [] };
          return (
            e.forEach(function (e) {
              n.$or.push(e.queryObject);
            }),
            t._setQueryObject(n),
            t
          );
        }
        compare(e, t, n) {
          let a = 'eq';
          switch (t) {
            case '=':
              a = 'eq';
              break;
            case '!=':
              a = 'ne';
              break;
            case '<':
              a = 'lt';
              break;
            case '<=':
              a = 'lte';
              break;
            case '>':
              a = 'gt';
              break;
            case '>=':
              a = 'gte';
              break;
            default:
              throw new o(605);
          }
          return this._addQueryObject(e, { [a]: s(n) }), this;
        }
        contains(e, t) {
          if (t && r(t)) return this._addQueryObject(e, { contains: t }), this;
          throw new o(605);
        }
        matches(e, t) {
          if (t && t instanceof RegExp) {
            let n = this._parseRegExp(t);
            return (
              n.length > 1
                ? this._addQueryObject(e, { regex: n[0], options: n[1] })
                : this._addQueryObject(e, { regex: n[0] }),
              this
            );
          }
          throw new o(605);
        }
        in(e, t) {
          if (t && t instanceof Array)
            return this._addQueryObject(e, { in: t.map(e => s(e)) }), this;
          throw new o(605);
        }
        notIn(e, t) {
          if (t && t instanceof Array)
            return this._addQueryObject(e, { nin: t.map(e => s(e)) }), this;
          throw new o(605);
        }
        arrayContains(e, t) {
          if (t && t instanceof Array)
            return this._addQueryObject(e, { all: t }), this;
          throw new o(605);
        }
        isNull(e) {
          return (
            e && e instanceof Array
              ? e.forEach(e => {
                  this._addQueryObject(e, { isnull: !0 });
                })
              : this._addQueryObject(e, { isnull: !0 }),
            this
          );
        }
        isNotNull(e) {
          return (
            e && e instanceof Array
              ? e.forEach(e => {
                  this._addQueryObject(e, { isnull: !1 });
                })
              : this._addQueryObject(e, { isnull: !1 }),
            this
          );
        }
        exists(e) {
          return (
            e && e instanceof Array
              ? e.forEach(e => {
                  this._addQueryObject(e, { exists: !0 });
                })
              : this._addQueryObject(e, { exists: !0 }),
            this
          );
        }
        notExists(e) {
          return (
            e && e instanceof Array
              ? e.forEach(e => {
                  this._addQueryObject(e, { exists: !1 });
                })
              : this._addQueryObject(e, { exists: !1 }),
            this
          );
        } // 在指定多边形集合中找出包含某一点的多边形
        include(e, t) {
          if (t && t instanceof a)
            return this._addQueryObject(e, { intersects: t.toGeoJSON() }), this;
          throw new o(605);
        } // 在指定点集合中，查找包含于指定的多边形区域的点
        within(e, t) {
          if (t && t instanceof i)
            return this._addQueryObject(e, { within: t.toGeoJSON() }), this;
          throw new o(605);
        } // 在指定点集合中，查找包含在指定圆心和指定半径所构成的圆形区域中的点
        withinCircle(e, t, n) {
          if (t && t instanceof a) {
            let a = { radius: n, coordinates: [t.longitude, t.latitude] };
            return this._addQueryObject(e, { center: a }), this;
          }
          throw new o(605);
        } // 在指定点集合中，查找包含在以某点为起点的最大和最小距离所构成的圆环区域中的点
        withinRegion(e, t, n, i = 0) {
          if (t && t instanceof a) {
            let a = { geometry: t.toGeoJSON(), min_distance: i };
            return (
              n && (a.max_distance = n),
              this._addQueryObject(e, { nearsphere: a }),
              this
            );
          }
          throw new o(605);
        }
        hasKey(e, t) {
          if ('string' != typeof e || 'string' != typeof t) throw o(605);
          return this._addQueryObject(e, { has_key: t }), this;
        }
        _setQueryObject(e) {
          this.queryObject = e;
        }
        _addQueryObject(e, t) {
          if (t.constructor !== Object) throw new o(605);
          let n = { [e]: {} };
          Object.keys(t).forEach(a => {
            n[e][`$${a}`] = t[a];
          }),
            this.queryObject.$and || (this.queryObject.$and = []),
            this.queryObject.$and.push(n);
        } // 对 RegExp 类型的变量解析出不含左右斜杠和 flag 的正则字符串和 flags eg. /xxx/gi => 'xxx' and 'gi'
        _parseRegExp(e) {
          let t = [],
            n = e.toString(),
            a = n.lastIndexOf('/');
          return (
            t.push(n.substring(1, a)),
            a !== n.length - 1 && t.push(n.substring(a + 1)),
            t
          );
        }
      }
      e.exports = c;
    },
    /* 12 */
    /***/ function (e, t, n) {
      const a = n(5);
      function i(e = ['BaseRecord']) {
        const t = n(15),
          a = n(25);
        return n =>
          e.includes('Geo') && (n instanceof t || n instanceof a)
            ? n.toGeoJSON()
            : e.includes('BaseRecord') && n instanceof o
            ? null == n._recordID
              ? ''
              : n._recordID.toString()
            : n;
      }
      class o {
        constructor(e) {
          (this._recordID = e), this._recordValueInit();
        }
        _recordValueInit() {
          this._record = { $set: {}, $unset: {} };
        }
        set(...e) {
          const t = i(['BaseRecord', 'Geo']),
            n = i(['Geo']);
          if (1 === e.length) {
            if ('object' != typeof e[0]) throw new a(605);
            {
              let i = e[0],
                o = {};
              Object.keys(e[0]).forEach(e => {
                if (this._record.$unset.hasOwnProperty(e)) throw new a(605);
                let r = i[e];
                Array.isArray(r) ? (o[e] = r.map(e => n(e))) : (o[e] = t(r));
              }),
                (this._record.$set = o);
            }
          } else {
            if (2 !== e.length) throw new a(605);
            {
              if (this._record.$unset.hasOwnProperty(e[0])) throw new a(605);
              let i = e[1];
              Array.isArray(i)
                ? (this._record.$set[e[0]] = i.map(e => n(e)))
                : (this._record.$set[e[0]] = t(i));
            }
          }
          return this;
        }
        unset(...e) {
          if ('object' == typeof e[0]) {
            let t = {};
            Object.keys(e[0]).forEach(e => {
              if (this._record.$set.hasOwnProperty(e)) throw new a(605);
              t[e] = '';
            }),
              (this._record.$unset = t);
          } else {
            if ('string' != typeof e[0]) throw new a(605);
            if (this._record.$set.hasOwnProperty(e[0])) throw new a(605);
            this._record.$unset[e[0]] = '';
          }
          return this;
        }
        incrementBy(e, t) {
          return (this._record.$set[e] = { $incr_by: t }), this;
        }
        append(e, t) {
          const n = i(['Geo']);
          return (
            t instanceof Array || (t = [t]),
            (t = t.map(e => n(e))),
            (this._record.$set[e] = { $append: t }),
            this
          );
        }
        uAppend(e, t) {
          const n = i(['Geo']);
          return (
            t instanceof Array || (t = [t]),
            (t = t.map(e => n(e))),
            (this._record.$set[e] = { $append_unique: t }),
            this
          );
        }
        remove(e, t) {
          const n = i(['Geo']);
          return (
            t instanceof Array || (t = [t]),
            (t = t.map(e => n(e))),
            (this._record.$set[e] = { $remove: t }),
            this
          );
        }
        patchObject(e, t) {
          if ('[object Object]' !== Object.prototype.toString.call(t))
            throw new a(605);
          return (this._record.$set[e] = { $update: t }), this;
        }
        pop(e) {
          if ('string' != typeof e || 0 === e.length) throw new a(605);
          return (this._record.$set[e] = { $pop: 1 }), this;
        }
        shift(e) {
          if ('string' != typeof e || 0 === e.length) throw new a(605);
          return (this._record.$set[e] = { $pop: -1 }), this;
        }
      }
      (o._serializeValueFuncFactory = i), (e.exports = o);
    },
    /* 13 */
    /***/ function (e, t) {
      e.exports = {
        QUERY_LIMITATION_DEFAULT: 20,
        URL: {
          SCHEMA_TABLE: {
            GET_SCHEMA: '/v1.8/schema/:tableID/',
            GET_SCHEMA_LIST: '/v1.8/schema/',
            UPDATE_SCHEMA: '/v1.8/schema/:tableID/',
            CREATE_SCHEMA: '/v1.8/schema/',
            DELETE_SCHEMA: '/v1.8/schema/:tableID/',
          },
          SCHEMA: {
            GET_RECORD: '/v2.7/schema/:tableID/record/:recordID/',
            GET_RECORDS: '/v2.5/schema/:tableID/record/',
            CREATE_RECORD: '/v2.5/schema/:tableID/record/',
            CREATE_BATCH_RECORD: '/v2.5/schema/:tableID/record/',
            UPDATE_RECORD: '/v2.8/schema/:tableID/record/:recordID/',
            UPDATE_BATCH_RECORD: '/v2.8/schema/:tableID/record/',
            DELETE_RECORD: '/v2.7/schema/:tableID/record/:recordID/',
            DELETE_BATCH_RECORD: '/v2.5/schema/:tableID/record/',
            IMPORT: '/v1/schema/:tableID/import/',
            EXPORT: '/v1/schema/:tableID/export/',
          },
          CONTENT: {
            CREATE_CONTENT: '/v1/content/:groupID/text/',
            GET_CONTENT: '/v2.7/content/:groupID/text/:richTextID/',
            GET_CONTENTS: '/v2.5/schema/_richtextcontent/record/',
            UPDATE_CONTENT: '/v2.7/content/:groupID/text/:richTextID/',
            DELETE_CONTENT: '/v2.7/content/:groupID/text/:richTextID/',
            GET_CATEGORY: '/v1/content/:groupID/category/:categoryID/',
            GET_CATEGORIES: '/v2.2/content/:groupID/category/',
            CREATE_CATEGORY: '/v1/content/:groupID/category/',
            UPDATE_CATEGORY: '/v1/content/:groupID/category/:categoryID/',
            DELETE_CATEGORY: '/v1/content/:groupID/category/:categoryID/',
          },
          CONTENT_GROUP: {
            GET_CONTENT_GROUP_LIST: '/v2.2/content/',
            GET_CONTENT_GROUP: '/v2.2/content/:groupID/',
            GET_CONTNET: '/v1/content/:groupID/text/:richTextID/',
            GET_CONTENTS: '/v2.2/content/:groupID/text/',
            GET_CATEGORY: '/v1/content/:groupID/category/:categoryID/',
            GET_CATEGORIES: '/v2.2/content/:groupID/category/',
          },
          FILE: {
            CREATE_CATEGORY: '/v1/file-category/',
            UPDATE_CATEGORY: '/v1/file-category/:categoryID/',
            DELETE_CATEGORY: '/v1/file-category/:categoryID/',
            GET_FILE: '/v2.1/uploaded-file/:fileID/',
            GET_FILES: '/v2.2/uploaded-file/',
            DELETE_FILE: '/v1/file/',
            GET_CATEGORY: '/v1.3/file-category/:categoryID/',
            GET_CATEGORIES: '/v2.2/file-category/',
            GET_UPLOAD_CONFIG: '/v2.1/upload/',
            PURGE_CACHE: '/v1/cdn-cache-purge/',
            DOWNLOAD_FILE: '/v2.5/file-download/',
          },
          USER: {
            GET_USER: '/v2.7/user/info/:userID/',
            GET_USERS: '/v2.5/miniapp/user_profile/',
            UPDATE_USER: '/v2.7/user/info/:userID/',
            UPDATE_BATCH_USER: '/v2.5/miniapp/user_profile/',
            DELETE_USER: '/v2.7/miniapp/user_profile/:userID/',
            CREATE_USER: '/v2.6/miniapp/user_profile/',
            SET_ACCOUNT: '/v2.1/miniapp/user/account/:userID/',
            SET_ACCOUNT_V2: '/v2.2/miniapp/user/account/:userID/',
          },
          USER_GROUP: {
            USER_GROUP: '/v1/user-group/:id/',
            USER_GROUPS: '/v1/user-group/',
            MEMBERSHIP: '/v1/miniapp/group/membership/',
          },
          SUPER_GROUP: {
            SUPER_GROUP: '/v1/user-supergroup/:id/',
            SUPER_GROUPS: '/v1/user-supergroup/',
          },
          CLOUD_FUNCTION: '/v1.3/cloud-function/:functionName/job/',
          EMAIL: '/v1.3/email/job/',
          TEMPLATE_MESSAGE: '/v2.0/cloud-function/template-message/',
          TEMPLATE_MESSAGE_TICKET: '/v2.0/template-message-ticket/',
          SEND_SUBSCRIBE_MESSAGE: '/v2.3/cloud-function/subscription-message/',
          SUBSCRIBE_MESSAGE_TICKET: '/v2.3/subscription-message/ticket/',
          GET_ORDER: '/v2.0/idp/order/',
          // 分账通用接口
          GET_PROFIT_SHARING_ORDER_LIST:
            '/v2.2/idp/profit-sharing-order/query/',
          // 微信分账
          WECHAT_PROFIT_SHARING: '/v2.2/idp/order/profit-sharing/',
          WECHAT_MULTI_PROFIT_SHARING: '/v2.2/idp/order/multi-profit-sharing/',
          WECHAT_PROFIT_SHARING_ADD_RECEIVER:
            '/v2.2/idp/profit-sharing/add-receiver/',
          WECHAT_PROFIT_SHARING_REMOVE_RECEIVER:
            '/v2.2/idp/profit-sharing/remove-receiver/',
          GET_WECHAT_PROFIT_SHARING_REFUNDMENT_ORDER:
            '/v2.2/idp/profit-sharing-order/refundment-query/',
          WECHAT_PROFIT_SHARING_ORDER_FINISH:
            '/v2.2/idp/profit-sharing-order/finish/',
          WECHAT_PROFIT_SHARING_ORDER_REFUND:
            '/v2.2/idp/profit-sharing-order/refund/',
          // 支付宝分账
          ALIPAY_PROFIT_SHARING: '/v2.2/idp/alipay/order/profit-sharing/',
          ALIPAY_PROFIT_SHARING_ADD_RECEIVER:
            '/v2.2/idp/alipay/profit-sharing/add-receiver/',
          ALIPAY_PROFIT_SHARING_REMOVE_RECEIVER:
            '/v2.2/idp/alipay/profit-sharing/remove-receiver/',
          ALIPAY_PROFIT_SHARING_RECEIVER_QUERY:
            '/v2.2/idp/alipay/profit-sharing/receiver-query/',
          REFUND: '/v2.0/idp/refund/',
          ACCESS_TOKEN: '/v1/miniapp/access-token/',
          CENSOR_IMAGE: '/v1/censor-image/',
          CENSOR_MSG: '/v1/censor-msg/',
          PROMOTION_TRANSFER: '/v2.2/wechat-pay/transfer/',
          SEND_SMS_CODE: '/v2.1/sms-verification-code/',
          SEND_SMS_MESSAGE: '/v2.1/cloud-function/sms/',
          VERIFY_SMS_CODE: '/v1.8/sms-verification-code/verify/',
          WXACODE: '/v2.4/cloud-function/miniappcode/',
          GET_ASYNC_JOB_RESULT: '/v1/bulk-operation/:id/',
          GET_SERVER_TIME: '/v2.3/server/time/',
          UPDATE_WECHAT_USER_INFO: '/v2.7/idp/wechat/user/info/',
          REDPACK: {
            GET_REDPACK: '/v2.2/wechat-pay/redpack/:id/',
            GET_REDPACKS: '/v2.2/wechat-pay/redpack/',
            GET_REDPACK_INFO: '/v1/wechat-pay/redpack-info/',
          },
          ALIPAY: {
            MINIAPP_QR_CODE: '/v2.0/idp/alipay/miniapp-qr-code/',
            CENSOR_MSG: '/v2.6/alipay/censor-msg/',
          },
          WECHAT: {
            SEND_SUBSCRIBE_MESSAGE:
              '/v2.3/cloud-function/subscription-message/',
            LIVESTREAMING_GET_ROOM_LIST: '/v2.4/livestreaming/wechat/room/',
            LIVESTREAMING_GET_PLAYBACK_LIST:
              '/v2.4/livestreaming/wechat/playback/',
            DECRYPT_DATA: '/v2.7/wechat/decrypt/:type/',
            GET_USER_RISK_RANK: '/v2.6/user-riskrank/',
            PRIVATE_MESSAGE: '/v2.7/private-message/',
          },
          QQ: {
            CENSOR_IMAGE: '/v2.2/qq/censor-image/',
            CENSOR_MSG: '/v2.2/qq/censor-msg/',
          },
          BYTEDANCE: {
            MINIAPP_QR_CODE:
              '/v2.5/cloud-function/idp/bytedance/miniapp-qr-code/',
          },
          MOBILE_TOP_UP: '/v2.7/mobile-topup/',
          PEOPLE_ALIVE: '/v2.7/gdgov/people-alive/',
          // 微信小程序scheme码
          URL_SCHEME: {
            GET_URL_SCHEMES: '/v2.7/wechat/url-scheme/',
            GET_URL_SCHEME: '/v2.7/wechat/url-scheme/:id/',
            CREATE_URL_SCHEME: '/v2.7/wechat/url-scheme/',
            DELETE_URL_SCHEME: '/v2.7/wechat/url-scheme/:id/',
          },
        },
        TEMPLATE_MESSAGE_PLATFORM: {
          WECHAT: 'wechat_miniapp',
          ALIPAY: 'alipay_miniapp',
          QQ: 'qq_miniapp',
          BAIDU: 'baidu_miniapp',
        },
        PROFIT_SHARING_GATEWAY_TYPE: {
          WECHAT: 'weixin_tenpay',
          ALIPAY: 'alipay',
        },
      };
      /***/
    },
    /* 14 */
    /***/ function (e, t, n) {
      /**
       * Detect Electron renderer process, which is node, but we should
       * treat as a browser.
       */
      'undefined' == typeof process || 'renderer' === process.type
        ? (e.exports = n(70))
        : (e.exports = n(72));
      /***/
    },
    /* 15 */
    /***/ function (e, t, n) {
      const a = n(6);
      e.exports = class {
        constructor(e, t) {
          (this.longitude = t),
            (this.latitude = e),
            (this.geoJSON = {
              type: 'Point',
              coordinates: [this.latitude, this.longitude],
            });
        }
        toGeoJSON() {
          return a(this.geoJSON);
        }
      };
    },
    /* 16 */
    /***/ function (e, t, n) {
      const a = n(59),
        i = n(91),
        o = n(92),
        r = n(94),
        s = n(5);
      let c = '';
      function p(e) {
        return delete e.config, delete e.request, e;
      }
      /**
       * 请求前保存接口 url，以便接口报错时可展示具体 url
       */ function u(e) {
        e.interceptors.request.use(
          e => (
            // eslint-disable-next-line no-console
            (c = ''), e && e.url && (c = e.url), e
          ),
        );
      }
      /**
       * 在报错时打印接口 url，没报错则不用打印
       */ function l() {
        c &&
          // eslint-disable-next-line no-console
          console.log('Requested API endpoint that throws the error - ', c);
      }
      /**
       * 清洗 axios 返回数据，移除无用字段
       * @param response
       * @returns {*}
       */ function d(e) {
        return p(e);
      }
      /**
       * 清洗 outerRequest 错误对象
       * @param err
       */ function m(e) {
        return p(e), e.response && p(e), l(), Promise.reject(e);
      }
      /**
       * 清洗 innerRequest 错误对象
       * @param err
       * @returns {Promise<never>}
       */ function f(e) {
        p(e);
        let t = e.response;
        if (t) {
          p(t), l();
          let e = t.data,
            n = '';
          return (
            (n = e && e.error_msg ? e.error_msg : t.statusText),
            Promise.reject(new s(t.status, n))
          );
        }
        return Promise.reject(e);
      }
      function h() {
        let e = Object.assign({}, i.proxy);
        return (
          global.HTTPS_AGENT &&
            Object.assign(e, {
              secureProxy: !0,
              key: global.HTTPS_AGENT.key,
              cert: global.HTTPS_AGENT.cert,
            }),
          e
        );
      }
      function v() {
        return 'DEV' === process.env.NODE_ENV || 'CI' === process.env.NODE_ENV
          ? {}
          : { httpAgent: new o(h()), httpsAgent: new r(h()) };
      }
      e.exports = {
        getInnerRequest: function () {
          let e = a.create(
            Object.assign(
              {
                baseURL: global.API_HOST
                  ? `${global.API_HOST}/dserve`
                  : `${i.API_HOST}/dserve`,
                withCredentials: !0,
                headers: {
                  'X-Hydrogen-MiniApp-ID': global.__FAAS_EVENT.miniappId,
                  'X-Hydrogen-Cloud-Function-Token': global.__FAAS_EVENT.token,
                },
              },
              v(),
            ),
          );
          return u(e), e.interceptors.response.use(d, f), e;
        },
        getOuterRequest: function () {
          let e = a.create(v());
          return u(e), e.interceptors.response.use(d, m), e;
        },
      };
    },
    /* 17 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2),
        i = n(63),
        o = { 'Content-Type': 'application/x-www-form-urlencoded' };
      function r(e, t) {
        !a.isUndefined(e) &&
          a.isUndefined(e['Content-Type']) &&
          (e['Content-Type'] = t);
      }
      var s,
        c = {
          adapter:
            ('undefined' != typeof XMLHttpRequest
              ? // For browsers use XHR adapter
                (s = n(64))
              : 'undefined' != typeof process &&
                // For node use HTTP adapter
                (s = n(69)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                i(t, 'Content-Type'),
                a.isFormData(e) ||
                a.isArrayBuffer(e) ||
                a.isBuffer(e) ||
                a.isStream(e) ||
                a.isFile(e) ||
                a.isBlob(e)
                  ? e
                  : a.isArrayBufferView(e)
                  ? e.buffer
                  : a.isURLSearchParams(e)
                  ? (r(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                    e.toString())
                  : a.isObject(e)
                  ? (r(t, 'application/json;charset=utf-8'), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              /*eslint no-param-reassign:0*/
              if ('string' == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {
                  /* Ignore */
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (c.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
        a.forEach(['delete', 'get', 'head'], function (e) {
          c.headers[e] = {};
        }),
        a.forEach(['post', 'put', 'patch'], function (e) {
          c.headers[e] = a.merge(o);
        }),
        (e.exports = c);
    },
    /* 18 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(33);
      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */ e.exports = function (e, t, n, i, o) {
        var r = new Error(e);
        return a(r, t, n, i, o);
      };
    },
    /* 19 */
    /***/ function (e, t) {
      e.exports = require('http');
      /***/
    },
    /* 20 */
    /***/ function (e, t) {
      e.exports = require('assert');
      /***/
    },
    /* 21 */
    /***/ function (e, t) {
      e.exports = require('stream');
      /***/
    },
    /* 22 */
    /***/ function (e, t) {
      e.exports = require('net');
      /***/
    },
    /* 23 */
    /***/ function (e, t) {
      e.exports = require('tls');
      /***/
    },
    /* 24 */
    /***/ function (e, t) {
      e.exports = require('events');
      /***/
    },
    /* 25 */
    /***/ function (e, t, n) {
      const a = n(15),
        i = n(5),
        o = n(6);
      e.exports = class {
        constructor(e) {
          if (!(e && e instanceof Array)) throw new i(605);
          if (e.length < 4) throw new i(605);
          (this.points = e),
            (this.geoJSON = { type: 'Polygon', coordinates: [] });
        }
        toGeoJSON() {
          let e = this.geoJSON.coordinates,
            t = [];
          return (
            this.points.forEach(e => {
              if (e instanceof a) t.push([e.longitude, e.latitude]);
              else {
                if (!(e instanceof Array && 2 === e.length)) throw new i(605);
                t.push(e);
              }
            }),
            e.push(t),
            o(this.geoJSON)
          );
        }
      };
    },
    /* 26 */
    /***/ function (e, t, n) {
      var a = n(27),
        i = n(50),
        o = n(28),
        r = '[object String]';
      /** `Object#toString` result references. */ e.exports =
        /**
         * Checks if `value` is classified as a `String` primitive or object.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a string, else `false`.
         * @example
         *
         * _.isString('abc');
         * // => true
         *
         * _.isString(1);
         * // => false
         */
        function (e) {
          return 'string' == typeof e || (!i(e) && o(e) && a(e) == r);
        };
    },
    /* 27 */
    /***/ function (e, t, n) {
      var a = n(49),
        i = n(111),
        o = n(112),
        r = '[object Null]',
        s = '[object Undefined]',
        c = a ? a.toStringTag : void 0;
      /** `Object#toString` result references. */ e.exports =
        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function (e) {
          return null == e
            ? void 0 === e
              ? s
              : r
            : c && c in Object(e)
            ? i(e)
            : o(e);
        };
    },
    /* 28 */
    /***/ function (e, t) {
      e.exports =
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function (e) {
          return null != e && 'object' == typeof e;
        };
    },
    /* 29 */
    /***/ function (e, t, n) {
      (e.exports = f), (f.Minimatch = h);
      var a = { sep: '/' };
      try {
        a = n(8);
      } catch (e) {}
      var i = (f.GLOBSTAR = h.GLOBSTAR = {}),
        o = n(142),
        r = {
          '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
          '?': { open: '(?:', close: ')?' },
          '+': { open: '(?:', close: ')+' },
          '*': { open: '(?:', close: ')*' },
          '@': { open: '(?:', close: ')' },
        },
        s = '[^/]',
        c = s + '*?',
        p = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?',
        u = '(?:(?!(?:\\/|^)\\.).)*?',
        l = '().*{}+?[]^$\\!'.split('').reduce(function (e, t) {
          return (e[t] = !0), e;
        }, {});
      // normalizes slashes.
      var d = /\/+/;
      function m(e, t) {
        (e = e || {}), (t = t || {});
        var n = {};
        return (
          Object.keys(t).forEach(function (e) {
            n[e] = t[e];
          }),
          Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          }),
          n
        );
      }
      function f(e, t, n) {
        if ('string' != typeof t)
          throw new TypeError('glob pattern string required');
        // shortcut: comments match nothing.
        return (
          n || (n = {}),
          !(!n.nocomment && '#' === t.charAt(0)) &&
            // "" only matches ""
            ('' === t.trim() ? '' === e : new h(t, n).match(e))
        );
      }
      function h(e, t) {
        if (!(this instanceof h)) return new h(e, t);
        if ('string' != typeof e)
          throw new TypeError('glob pattern string required');
        t || (t = {}),
          (e = e.trim()),
          // windows support: need to use /, not \
          '/' !== a.sep && (e = e.split(a.sep).join('/')),
          (this.options = t),
          (this.set = []),
          (this.pattern = e),
          (this.regexp = null),
          (this.negate = !1),
          (this.comment = !1),
          (this.empty = !1),
          // make the set of regexps etc.
          this.make();
      }
      function v(e, t) {
        if (
          (t || (t = this instanceof h ? this.options : {}),
          void 0 === (e = void 0 === e ? this.pattern : e))
        )
          throw new TypeError('undefined pattern');
        return t.nobrace || !e.match(/\{.*\}/) ? [e] : o(e);
      }
      // parse a component of the expanded set.
      // At this point, no pattern may contain "/" in it
      // so we're going to return a 2d array, where each entry is the full
      // pattern, split on '/', and then turned into a regular expression.
      // A regexp is made at the end which joins each array with an
      // escaped /, and another full one which joins each regexp with |.
      //
      // Following the lead of Bash 4.1, note that "**" only has special meaning
      // when it is the *only* thing in a path portion.  Otherwise, any series
      // of * is equivalent to a single *.  Globstar behavior is enabled by
      // default, and can be disabled by setting options.noglobstar.
      (f.filter = function (e, t) {
        return (
          (t = t || {}),
          function (n, a, i) {
            return f(n, e, t);
          }
        );
      }),
        (f.defaults = function (e) {
          if (!e || !Object.keys(e).length) return f;
          var t = f,
            n = function (n, a, i) {
              return t.minimatch(n, a, m(e, i));
            };
          return (
            (n.Minimatch = function (n, a) {
              return new t.Minimatch(n, m(e, a));
            }),
            n
          );
        }),
        (h.defaults = function (e) {
          return e && Object.keys(e).length ? f.defaults(e).Minimatch : h;
        }),
        (h.prototype.debug = function () {}),
        (h.prototype.make = function () {
          // don't do it more than once.
          if (this._made) return;
          var e = this.pattern,
            t = this.options;
          // empty patterns and comments match nothing.
          if (!t.nocomment && '#' === e.charAt(0))
            return void (this.comment = !0);
          if (!e) return void (this.empty = !0);
          // step 1: figure out negation, etc.
          this.parseNegate();
          // step 2: expand braces
          var n = (this.globSet = this.braceExpand());
          t.debug && (this.debug = console.error);
          this.debug(this.pattern, n),
            // step 3: now we have a set, so turn each one into a series of path-portion
            // matching patterns.
            // These will be regexps, except in the case of "**", which is
            // set to the GLOBSTAR object for globstar behavior,
            // and will not contain any / characters
            (n = this.globParts =
              n.map(function (e) {
                return e.split(d);
              })),
            this.debug(this.pattern, n),
            // glob --> regexps
            (n = n.map(function (e, t, n) {
              return e.map(this.parse, this);
            }, this)),
            this.debug(this.pattern, n),
            // filter out everything that didn't compile properly.
            (n = n.filter(function (e) {
              return -1 === e.indexOf(!1);
            })),
            this.debug(this.pattern, n),
            (this.set = n);
        }),
        (h.prototype.parseNegate = function () {
          var e = this.pattern,
            t = !1,
            n = 0;
          if (this.options.nonegate) return;
          for (var a = 0, i = e.length; a < i && '!' === e.charAt(a); a++)
            (t = !t), n++;
          n && (this.pattern = e.substr(n));
          this.negate = t;
        }),
        // Brace expansion:
        // a{b,c}d -> abd acd
        // a{b,}c -> abc ac
        // a{0..3}d -> a0d a1d a2d a3d
        // a{b,c{d,e}f}g -> abg acdfg acefg
        // a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
        //
        // Invalid sets are not expanded.
        // a{2..}b -> a{2..}b
        // a{b}c -> a{b}c
        (f.braceExpand = function (e, t) {
          return v(e, t);
        }),
        (h.prototype.braceExpand = v),
        (h.prototype.parse = function (e, t) {
          if (e.length > 65536) throw new TypeError('pattern is too long');
          var n = this.options;
          // shortcuts
          if (!n.noglobstar && '**' === e) return i;
          if ('' === e) return '';
          var a,
            o = '',
            p = !!n.nocase,
            u = !1,
            d = [],
            m = [],
            f = !1,
            h = -1,
            v = -1,
            g =
              '.' === e.charAt(0)
                ? ''
                : n.dot
                ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
                : '(?!\\.)',
            b = this;
          function y() {
            if (a) {
              // we had some state-tracking character
              // that wasn't consumed by this pass.
              switch (a) {
                case '*':
                  (o += c), (p = !0);
                  break;
                case '?':
                  (o += s), (p = !0);
                  break;
                default:
                  o += '\\' + a;
              }
              b.debug('clearStateChar %j %j', a, o), (a = !1);
            }
          }
          for (var E, _ = 0, w = e.length; _ < w && (E = e.charAt(_)); _++)
            // skip over any that are escaped.
            if ((this.debug('%s\t%s %s %j', e, _, o, E), u && l[E]))
              (o += '\\' + E), (u = !1);
            else
              switch (E) {
                case '/':
                  // completely not allowed, even escaped.
                  // Should already be path-split by now.
                  return !1;
                case '\\':
                  y(), (u = !0);
                  continue;
                // the various stateChar values
                // for the "extglob" stuff.
                case '?':
                case '*':
                case '+':
                case '@':
                case '!':
                  // all of those are literals inside a class, except that
                  // the glob [!a] means [^a] in regexp
                  if (
                    (this.debug('%s\t%s %s %j <-- stateChar', e, _, o, E), f)
                  ) {
                    this.debug('  in class'),
                      '!' === E && _ === v + 1 && (E = '^'),
                      (o += E);
                    continue;
                  }
                  // if we already have a stateChar, then it means
                  // that there was something like ** or +? in there.
                  // Handle the stateChar, then proceed with this one.
                  b.debug('call clearStateChar %j', a),
                    y(),
                    (a = E),
                    // if extglob is disabled, then +(asdf|foo) isn't a thing.
                    // just clear the statechar *now*, rather than even diving into
                    // the patternList stuff.
                    n.noext && y();
                  continue;
                case '(':
                  if (f) {
                    o += '(';
                    continue;
                  }
                  if (!a) {
                    o += '\\(';
                    continue;
                  }
                  d.push({
                    type: a,
                    start: _ - 1,
                    reStart: o.length,
                    open: r[a].open,
                    close: r[a].close,
                  }),
                    // negation is (?:(?!js)[^/]*)
                    (o += '!' === a ? '(?:(?!(?:' : '(?:'),
                    this.debug('plType %j %j', a, o),
                    (a = !1);
                  continue;
                case ')':
                  if (f || !d.length) {
                    o += '\\)';
                    continue;
                  }
                  y(), (p = !0);
                  var O = d.pop();
                  // negation is (?:(?!js)[^/]*)
                  // The others are (?:<pattern>)<type>
                  (o += O.close),
                    '!' === O.type && m.push(O),
                    (O.reEnd = o.length);
                  continue;
                case '|':
                  if (f || !d.length || u) {
                    (o += '\\|'), (u = !1);
                    continue;
                  }
                  y(), (o += '|');
                  continue;
                // these are mostly the same in regexp and glob
                case '[':
                  if (
                    // swallow any state-tracking char before the [
                    (y(), f)
                  ) {
                    o += '\\' + E;
                    continue;
                  }
                  (f = !0), (v = _), (h = o.length), (o += E);
                  continue;
                case ']':
                  //  a right bracket shall lose its special
                  //  meaning and represent itself in
                  //  a bracket expression if it occurs
                  //  first in the list.  -- POSIX.2 2.8.3.2
                  if (_ === v + 1 || !f) {
                    (o += '\\' + E), (u = !1);
                    continue;
                  }
                  // handle the case where we left a class open.
                  // "[z-a]" is valid, equivalent to "\[z-a\]"
                  if (f) {
                    // split where the last [ was, make sure we don't have
                    // an invalid re. if so, re-walk the contents of the
                    // would-be class to re-translate any characters that
                    // were passed through as-is
                    // TODO: It would probably be faster to determine this
                    // without a try/catch and a new RegExp, but it's tricky
                    // to do safely.  For now, this is safe and works.
                    var T = e.substring(v + 1, _);
                    try {
                      RegExp('[' + T + ']');
                    } catch (e) {
                      // not a valid class!
                      var R = this.parse(T, x);
                      (o = o.substr(0, h) + '\\[' + R[0] + '\\]'),
                        (p = p || R[1]),
                        (f = !1);
                      continue;
                    }
                  }
                  // finish up the class.
                  (p = !0), (f = !1), (o += E);
                  continue;
                default:
                  // swallow any state char that wasn't consumed
                  y(),
                    u
                      ? // no need
                        (u = !1)
                      : !l[E] || ('^' === E && f) || (o += '\\'),
                    (o += E);
              } // switch
          // for
          // handle the case where we left a class open.
          // "[abc" is valid, equivalent to "\[abc"
          f &&
            // split where the last [ was, and escape it
            // this is a huge pita.  We now have to re-walk
            // the contents of the would-be class to re-translate
            // any characters that were passed through as-is
            ((T = e.substr(v + 1)),
            (R = this.parse(T, x)),
            (o = o.substr(0, h) + '\\[' + R[0]),
            (p = p || R[1]));
          // handle the case where we had a +( thing at the *end*
          // of the pattern.
          // each pattern list stack adds 3 chars, and we need to go through
          // and escape any | chars that were passed through as-is for the regexp.
          // Go through and escape them, taking care not to double-escape any
          // | chars that were already escaped.
          for (O = d.pop(); O; O = d.pop()) {
            var C = o.slice(O.reStart + O.open.length);
            this.debug('setting tail', o, O),
              // maybe some even number of \, then maybe 1 \, followed by a |
              (C = C.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (e, t, n) {
                // need to escape all those slashes *again*, without escaping the
                // one that we need for escaping the | character.  As it works out,
                // escaping an even number of slashes can be done by simply repeating
                // it exactly after itself.  That's why this trick works.
                //
                // I am sorry that you have to see this.
                return (
                  n ||
                    // the | isn't already escaped, so escape it.
                    (n = '\\'),
                  t + t + n + '|'
                );
              })),
              this.debug('tail=%j\n   %s', C, C, O, o);
            var A = '*' === O.type ? c : '?' === O.type ? s : '\\' + O.type;
            (p = !0), (o = o.slice(0, O.reStart) + A + '\\(' + C);
          }
          // handle trailing things that only matter at the very end.
          y(),
            u &&
              // trailing \\
              (o += '\\\\');
          // only need to apply the nodot start if the re starts with
          // something that could conceivably capture a dot
          var S = !1;
          switch (o.charAt(0)) {
            case '.':
            case '[':
            case '(':
              S = !0;
          }
          // Hack to work around lack of negative lookbehind in JS
          // A pattern like: *.!(x).!(y|z) needs to ensure that a name
          // like 'a.xyz.yz' doesn't match.  So, the first negative
          // lookahead, has to look ALL the way ahead, to the end of
          // the pattern.
          for (var k = m.length - 1; k > -1; k--) {
            var I = m[k],
              j = o.slice(0, I.reStart),
              P = o.slice(I.reStart, I.reEnd - 8),
              D = o.slice(I.reEnd - 8, I.reEnd),
              L = o.slice(I.reEnd);
            D += L;
            // Handle nested stuff like *(*.js|!(*.json)), where open parens
            // mean that we should *not* include the ) in the bit that is considered
            // "after" the negated section.
            var N = j.split('(').length - 1,
              U = L;
            for (_ = 0; _ < N; _++) U = U.replace(/\)[+*?]?/, '');
            var M = '';
            '' === (L = U) && t !== x && (M = '$');
            var G = j + P + L + M + D;
            o = G;
          }
          // if the re is not "" at this point, then we need to make sure
          // it doesn't match against an empty path part.
          // Otherwise a/* will match a/, which it should not.
          '' !== o && p && (o = '(?=.)' + o);
          S && (o = g + o);
          // parsing just a piece of a larger pattern.
          if (t === x) return [o, p];
          // skip the regexp for non-magical patterns
          // unescape anything in it, though, so that it'll be
          // an exact match against a file etc.
          if (!p) return e.replace(/\\(.)/g, '$1');
          var F = n.nocase ? 'i' : '';
          try {
            var q = new RegExp('^' + o + '$', F);
          } catch (e) {
            // If it was an invalid regular expression, then it can't match
            // anything.  This trick looks for a character after the end of
            // the string, which is of course impossible, except in multi-line
            // mode, but it's not a /m regex.
            return new RegExp('$.');
          }
          return (q._glob = e), (q._src = o), q;
        });
      var x = {};
      (f.makeRe = function (e, t) {
        return new h(e, t || {}).makeRe();
      }),
        (h.prototype.makeRe = function () {
          if (this.regexp || !1 === this.regexp) return this.regexp;
          // at this point, this.set is a 2d array of partial
          // pattern strings, or "**".
          //
          // It's better to use .match().  This function shouldn't
          // be used, really, but it's pretty convenient sometimes,
          // when you just want to work with a regex.
          var e = this.set;
          if (!e.length) return (this.regexp = !1), this.regexp;
          var t = this.options,
            n = t.noglobstar ? c : t.dot ? p : u,
            a = t.nocase ? 'i' : '',
            o = e
              .map(function (e) {
                return e
                  .map(function (e) {
                    return e === i
                      ? n
                      : 'string' == typeof e
                      ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
                      : e._src;
                  })
                  .join('\\/');
              })
              .join('|');
          // can match anything, as long as it's not this.
          // must match entire pattern
          // ending in a * or ** will make it less strict.
          (o = '^(?:' + o + ')$'), this.negate && (o = '^(?!' + o + ').*$');
          try {
            this.regexp = new RegExp(o, a);
          } catch (e) {
            this.regexp = !1;
          }
          return this.regexp;
        }),
        (f.match = function (e, t, n) {
          var a = new h(t, (n = n || {}));
          return (
            (e = e.filter(function (e) {
              return a.match(e);
            })),
            a.options.nonull && !e.length && e.push(t),
            e
          );
        }),
        (h.prototype.match = function (e, t) {
          // short-circuit in the case of busted things.
          // comments, etc.
          if ((this.debug('match', e, this.pattern), this.comment)) return !1;
          if (this.empty) return '' === e;
          if ('/' === e && t) return !0;
          var n = this.options;
          // windows: need to use /, not \
          '/' !== a.sep && (e = e.split(a.sep).join('/'));
          // treat the test path as a set of pathparts.
          (e = e.split(d)), this.debug(this.pattern, 'split', e);
          // just ONE of the pattern sets in this.set needs to match
          // in order for it to be valid.  If negating, then just one
          // match means that we have failed.
          // Either way, return on the first hit.
          var i,
            o,
            r = this.set;
          for (
            this.debug(this.pattern, 'set', r), o = e.length - 1;
            o >= 0 && !(i = e[o]);
            o--
          );
          for (o = 0; o < r.length; o++) {
            var s = r[o],
              c = e;
            n.matchBase && 1 === s.length && (c = [i]);
            var p = this.matchOne(c, s, t);
            if (p) return !!n.flipNegate || !this.negate;
          }
          // didn't get any hits.  this is success if it's a negative
          // pattern, failure otherwise.
          return !n.flipNegate && this.negate;
        }),
        // set partial to true to test if, for example,
        // "/a/b" matches the start of "/*/b/*/d"
        // Partial means, if you run out of file before you run
        // out of pattern, then that's fine, as long as all
        // the parts match.
        (h.prototype.matchOne = function (e, t, n) {
          var a = this.options;
          this.debug('matchOne', { this: this, file: e, pattern: t }),
            this.debug('matchOne', e.length, t.length);
          for (
            var o = 0, r = 0, s = e.length, c = t.length;
            o < s && r < c;
            o++, r++
          ) {
            this.debug('matchOne loop');
            var p,
              u = t[r],
              l = e[o];
            // should be impossible.
            // some invalid regexp stuff in the set.
            if ((this.debug(t, u, l), !1 === u)) return !1;
            if (u === i) {
              this.debug('GLOBSTAR', [t, u, l]);
              // "**"
              // a/**/b/**/c would match the following:
              // a/b/x/y/z/c
              // a/x/y/z/b/c
              // a/b/x/b/x/c
              // a/b/c
              // To do this, take the rest of the pattern after
              // the **, and see if it would match the file remainder.
              // If so, return success.
              // If not, the ** "swallows" a segment, and try again.
              // This is recursively awful.
              //
              // a/**/b/**/c matching a/b/x/y/z/c
              // - a matches a
              // - doublestar
              //   - matchOne(b/x/y/z/c, b/**/c)
              //     - b matches b
              //     - doublestar
              //       - matchOne(x/y/z/c, c) -> no
              //       - matchOne(y/z/c, c) -> no
              //       - matchOne(z/c, c) -> no
              //       - matchOne(c, c) yes, hit
              var d = o,
                m = r + 1;
              if (m === c) {
                // a ** at the end will just swallow the rest.
                // We have found a match.
                // however, it will not swallow /.x, unless
                // options.dot is set.
                // . and .. are *never* matched by **, for explosively
                // exponential reasons.
                for (this.debug('** at the end'); o < s; o++)
                  if (
                    '.' === e[o] ||
                    '..' === e[o] ||
                    (!a.dot && '.' === e[o].charAt(0))
                  )
                    return !1;
                return !0;
              }
              // ok, let's see if we can swallow whatever we can.
              for (; d < s; ) {
                var f = e[d];
                // XXX remove this slice.  Just pass the start index.
                if (
                  (this.debug('\nglobstar while', e, d, t, m, f),
                  this.matchOne(e.slice(d), t.slice(m), n))
                )
                  // found a match.
                  return this.debug('globstar found match!', d, s, f), !0;
                // can't swallow "." or ".." ever.
                // can only swallow ".foo" when explicitly asked.
                if (
                  '.' === f ||
                  '..' === f ||
                  (!a.dot && '.' === f.charAt(0))
                ) {
                  this.debug('dot detected!', e, d, t, m);
                  break;
                }
                // ** swallows a segment, and continue.
                this.debug('globstar swallow a segment, and continue'), d++;
              }
              // no match was found.
              // However, in partial mode, we can't say this is necessarily over.
              // If there's more *pattern* left, then
              return !(
                !n ||
                // ran out of file
                (this.debug('\n>>> no match, partial?', e, d, t, m), d !== s)
              );
            }
            // something other than **
            // non-magic patterns just have to match exactly
            // patterns with magic have been turned into regexps.
            if (
              ('string' == typeof u
                ? ((p = a.nocase
                    ? l.toLowerCase() === u.toLowerCase()
                    : l === u),
                  this.debug('string match', u, l, p))
                : ((p = l.match(u)), this.debug('pattern match', u, l, p)),
              !p)
            )
              return !1;
          }
          // Note: ending in / means that we'll get a final ""
          // at the end of the pattern.  This can only match a
          // corresponding "" at the end of the file.
          // If the file ends in /, then it can only match a
          // a pattern that ends in /, unless the pattern just
          // doesn't have any more for it. But, a/b/ should *not*
          // match "a/b/*", even though "" matches against the
          // [^/]*? pattern, except in partial mode, where it might
          // simply not be reached yet.
          // However, a/b/ should still satisfy a/*
          // now either we fell off the end of the pattern, or we're done.
          if (o === s && r === c)
            // ran out of pattern and filename at the same time.
            // an exact hit!
            return !0;
          // should be unreachable.
          if (o === s)
            // ran out of file, but still had pattern left.
            // this is ok if we're doing the match as part of
            // a glob fs traversal.
            return n;
          if (r === c) return o === s - 1 && '' === e[o];
          throw new Error('wtf?');
        });
      // replace stuff like \* with *;
    },
    /* 30 */
    /***/ function (e, t, n) {
      'use strict';
      function a(e) {
        return '/' === e.charAt(0);
      }
      function i(e) {
        // https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
        var t =
            /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(
              e,
            ),
          n = t[1] || '',
          a = Boolean(n && ':' !== n.charAt(1));
        // UNC paths are always absolute
        return Boolean(t[2] || a);
      }
      (e.exports = 'win32' === process.platform ? i : a),
        (e.exports.posix = a),
        (e.exports.win32 = i);
    },
    /* 31 */
    /***/ function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
            n[a] = arguments[a];
          return e.apply(t, n);
        };
      };
    },
    /* 32 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(18);
      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */ e.exports = function (e, t, n) {
        var i = n.config.validateStatus;
        // Note: status is not exposed by XDomainRequest
        n.status && i && !i(n.status)
          ? t(
              a(
                'Request failed with status code ' + n.status,
                n.config,
                null,
                n.request,
                n,
              ),
            )
          : e(n);
      };
    },
    /* 33 */
    /***/ function (e, t, n) {
      'use strict';
      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */ e.exports = function (e, t, n, a, i) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = a),
          (e.response = i),
          e
        );
      };
    },
    /* 34 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2);
      function i(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */ e.exports = function (e, t, n) {
        /*eslint no-param-reassign:0*/
        if (!t) return e;
        var o;
        if (n) o = n(t);
        else if (a.isURLSearchParams(t)) o = t.toString();
        else {
          var r = [];
          a.forEach(t, function (e, t) {
            null !== e &&
              void 0 !== e &&
              (a.isArray(e) && (t += '[]'),
              a.isArray(e) || (e = [e]),
              a.forEach(e, function (e) {
                a.isDate(e)
                  ? (e = e.toISOString())
                  : a.isObject(e) && (e = JSON.stringify(e)),
                  r.push(i(t) + '=' + i(e));
              }));
          }),
            (o = r.join('&'));
        }
        return o && (e += (-1 === e.indexOf('?') ? '?' : '&') + o), e;
      };
    },
    /* 35 */
    /***/ function (e, t, n) {
      var a = n(7),
        i = n(19),
        o = n(10),
        r = n(20),
        s = n(21).Writable,
        c = n(14)('follow-redirects'),
        p = { GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0 },
        u = Object.create(null);
      // An HTTP(S) request that can be redirected
      function l(e, t) {
        // Initialize the request
        s.call(this),
          (e.headers = e.headers || {}),
          (this._options = e),
          (this._redirectCount = 0),
          (this._requestBodyLength = 0),
          (this._requestBodyBuffers = []),
          // Attach a callback if passed
          t && this.on('response', t);
        // React to responses of native requests
        var n = this;
        // Complete the URL object when necessary
        if (
          ((this._onNativeResponse = function (e) {
            n._processResponse(e);
          }),
          !e.pathname && e.path)
        ) {
          var a = e.path.indexOf('?');
          a < 0
            ? (e.pathname = e.path)
            : ((e.pathname = e.path.substring(0, a)),
              (e.search = e.path.substring(a)));
        }
        // Perform the first request
        this._performRequest();
      }
      // Wraps the key/value object of protocols with redirect functionality
      function d(e) {
        // Default settings
        var t = { maxRedirects: 21, maxBodyLength: 10485760 },
          n = {};
        // Wrap each protocol
        return (
          Object.keys(e).forEach(function (i) {
            var o = i + ':',
              s = (n[o] = e[i]),
              p = (t[i] = Object.create(s));
            // Executes a request, following redirects
            (p.request = function (e, i) {
              return (
                'string' == typeof e
                  ? ((e = a.parse(e)).maxRedirects = t.maxRedirects)
                  : (e = Object.assign(
                      {
                        protocol: o,
                        maxRedirects: t.maxRedirects,
                        maxBodyLength: t.maxBodyLength,
                      },
                      e,
                    )),
                (e.nativeProtocols = n),
                r.equal(e.protocol, o, 'protocol mismatch'),
                c('options', e),
                new l(e, i)
              );
            }),
              // Executes a GET request, following redirects
              (p.get = function (e, t) {
                var n = p.request(e, t);
                return n.end(), n;
              });
          }),
          t
        );
      }
      // Exports
      ['abort', 'aborted', 'error', 'socket', 'timeout'].forEach(function (e) {
        u[e] = function (t) {
          this._redirectable.emit(e, t);
        };
      }),
        (l.prototype = Object.create(s.prototype)),
        // Writes buffered data to the current native request
        (l.prototype.write = function (e, t, n) {
          this._requestBodyLength + e.length <= this._options.maxBodyLength
            ? ((this._requestBodyLength += e.length),
              this._requestBodyBuffers.push({ data: e, encoding: t }),
              this._currentRequest.write(e, t, n))
            : (this.emit(
                'error',
                new Error('Request body larger than maxBodyLength limit'),
              ),
              this.abort());
        }),
        // Ends the current native request
        (l.prototype.end = function (e, t, n) {
          var a = this._currentRequest;
          e
            ? this.write(e, t, function () {
                a.end(null, null, n);
              })
            : a.end(null, null, n);
        }),
        // Sets a header value on the current native request
        (l.prototype.setHeader = function (e, t) {
          (this._options.headers[e] = t), this._currentRequest.setHeader(e, t);
        }),
        // Clears a header value on the current native request
        (l.prototype.removeHeader = function (e) {
          delete this._options.headers[e], this._currentRequest.removeHeader(e);
        }),
        // Proxy all other public ClientRequest methods
        [
          'abort',
          'flushHeaders',
          'getHeader',
          'setNoDelay',
          'setSocketKeepAlive',
          'setTimeout',
        ].forEach(function (e) {
          l.prototype[e] = function (t, n) {
            return this._currentRequest[e](t, n);
          };
        }),
        // Proxy all public ClientRequest properties
        ['aborted', 'connection', 'socket'].forEach(function (e) {
          Object.defineProperty(l.prototype, e, {
            get: function () {
              return this._currentRequest[e];
            },
          });
        }),
        // Executes the next native request (initial or redirect)
        (l.prototype._performRequest = function () {
          // Load the native protocol
          var e = this._options.protocol,
            t = this._options.nativeProtocols[e];
          // If specified, use the agent corresponding to the protocol
          // (HTTP and HTTPS use different types of agents)
          if (this._options.agents) {
            var n = e.substr(0, e.length - 1);
            this._options.agent = this._options.agents[n];
          }
          // Create the native request
          var i = (this._currentRequest = t.request(
            this._options,
            this._onNativeResponse,
          ));
          (this._currentUrl = a.format(this._options)),
            // Set up event handlers
            (i._redirectable = this);
          /* istanbul ignore else */
          for (var o in u) o && i.on(o, u[o]);
          // End a redirected request
          // (The first request must be ended explicitly with RedirectableRequest#end)
          if (this._isRedirect) {
            // Write the request entity and end.
            var r = this._requestBodyBuffers;
            !(function e() {
              if (0 !== r.length) {
                var t = r.pop();
                i.write(t.data, t.encoding, e);
              } else i.end();
            })();
          }
        }),
        // Processes a response from the current native request
        (l.prototype._processResponse = function (e) {
          // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
          // that further action needs to be taken by the user agent in order to
          // fulfill the request. If a Location header field is provided,
          // the user agent MAY automatically redirect its request to the URI
          // referenced by the Location field value,
          // even if the specific status code is not understood.
          var t = e.headers.location;
          if (
            t &&
            !1 !== this._options.followRedirects &&
            e.statusCode >= 300 &&
            e.statusCode < 400
          ) {
            // RFC7231§6.4: A client SHOULD detect and intervene
            // in cyclical redirections (i.e., "infinite" redirection loops).
            if (++this._redirectCount > this._options.maxRedirects)
              return void this.emit(
                'error',
                new Error('Max redirects exceeded.'),
              );
            // RFC7231§6.4: Automatic redirection needs to done with
            // care for methods not known to be safe […],
            // since the user might not wish to redirect an unsafe request.
            // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
            // that the target resource resides temporarily under a different URI
            // and the user agent MUST NOT change the request method
            // if it performs an automatic redirection to that URI.
            var n,
              i = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in p)) {
              (this._options.method = 'GET'),
                // Drop a possible entity and headers related to it
                (this._requestBodyBuffers = []);
              for (n in i) /^content-/i.test(n) && delete i[n];
            }
            // Drop the Host header, as the redirect might lead to a different host
            if (!this._isRedirect)
              for (n in i) /^host$/i.test(n) && delete i[n];
            // Perform the redirected request
            var o = a.resolve(this._currentUrl, t);
            c('redirecting to', o),
              Object.assign(this._options, a.parse(o)),
              (this._isRedirect = !0),
              this._performRequest();
          }
          // The response is not a redirect; return it as-is
          else
            (e.responseUrl = this._currentUrl),
              this.emit('response', e),
              // Clean up
              (this._requestBodyBuffers = []);
        }),
        (e.exports = d({ http: i, https: o })),
        (e.exports.wrap = d);
    },
    /* 36 */
    /***/ function (e, t, n) {
      /**
       * Create a debugger with the given `namespace`.
       *
       * @param {String} namespace
       * @return {Function}
       * @api public
       */
      function a(e) {
        var n;
        function a() {
          // disabled?
          if (a.enabled) {
            var e = a,
              i = +new Date(),
              o = i - (n || i);
            // set `diff` timestamp
            (e.diff = o), (e.prev = n), (e.curr = i), (n = i);
            for (
              // turn the `arguments` into a proper Array
              var r = new Array(arguments.length), s = 0;
              s < r.length;
              s++
            )
              r[s] = arguments[s];
            (r[0] = t.coerce(r[0])),
              'string' != typeof r[0] &&
                // anything else let's inspect with %O
                r.unshift('%O');
            // apply any `formatters` transformations
            var c = 0;
            (r[0] = r[0].replace(/%([a-zA-Z%])/g, function (n, a) {
              // if we encounter an escaped % then don't increase the array index
              if ('%%' === n) return n;
              c++;
              var i = t.formatters[a];
              if ('function' == typeof i) {
                var o = r[c];
                (n = i.call(e, o)),
                  // now we need to remove `args[index]` since it's inlined in the `format`
                  r.splice(c, 1),
                  c--;
              }
              return n;
            })),
              // apply env-specific formatting (colors, etc.)
              t.formatArgs.call(e, r),
              (a.log || t.log || console.log.bind(console)).apply(e, r);
          }
        }
        return (
          (a.namespace = e),
          (a.enabled = t.enabled(e)),
          (a.useColors = t.useColors()),
          (a.color =
            /**
             * Select a color.
             * @param {String} namespace
             * @return {Number}
             * @api private
             */
            (function (e) {
              var n,
                a = 0;
              for (n in e) (a = (a << 5) - a + e.charCodeAt(n)), (a |= 0);
              return t.colors[Math.abs(a) % t.colors.length];
            })(e)),
          (a.destroy = i),
          // env-specific initialization logic for debug instances
          'function' == typeof t.init && t.init(a),
          t.instances.push(a),
          a
        );
      }
      function i() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0);
      }
      /**
       * Enables a debug mode by namespaces. This can include modes
       * separated by a colon and wildcards.
       *
       * @param {String} namespaces
       * @api public
       */ (/**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       *
       * Expose `debug()` as the module.
       */
      (t = e.exports = a.debug = a.default = a).coerce =
        /**
         * Coerce `val`.
         *
         * @param {Mixed} val
         * @return {Mixed}
         * @api private
         */
        function (e) {
          return e instanceof Error ? e.stack || e.message : e;
        }),
        /***/ (t.disable =
          /**
           * Disable debug output.
           *
           * @api public
           */
          function () {
            t.enable('');
          }),
        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */ (t.enable = function (e) {
          var n;
          t.save(e), (t.names = []), (t.skips = []);
          var a = ('string' == typeof e ? e : '').split(/[\s,]+/),
            i = a.length;
          for (n = 0; n < i; n++)
            a[n] &&
              ('-' ===
              // ignore empty strings
              (e = a[n].replace(/\*/g, '.*?'))[0]
                ? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
                : t.names.push(new RegExp('^' + e + '$')));
          for (n = 0; n < t.instances.length; n++) {
            var o = t.instances[n];
            o.enabled = t.enabled(o.namespace);
          }
        }),
        (t.enabled = function (e) {
          if ('*' === e[e.length - 1]) return !0;
          var n, a;
          for (n = 0, a = t.skips.length; n < a; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, a = t.names.length; n < a; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n(71)),
        /**
         * Active `debug` instances.
         */
        (t.instances = []),
        /**
         * The currently active debug mode names, and names to skip.
         */
        (t.names = []),
        (t.skips = []),
        /**
         * Map of special "%n" handling functions, for the debug "format" argument.
         *
         * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
         */
        (t.formatters = {});
    },
    /* 37 */
    /***/ function (e, t, n) {
      'use strict';
      /* global module, require */ e.exports = (function () {
        // Get a promise object. This may be native, or it may be polyfilled
        var e = n(82);
        /**
         * thatLooksLikeAPromiseToMe()
         *
         * Duck-types a promise.
         *
         * @param {object} o
         * @return {bool} True if this resembles a promise
         */
        /**
         * promisify()
         *
         * Transforms callback-based function -- func(arg1, arg2 .. argN, callback) -- into
         * an ES6-compatible Promise. Promisify provides a default callback of the form (error, result)
         * and rejects when `error` is truthy. You can also supply settings object as the second argument.
         *
         * @param {function} original - The function to promisify
         * @param {object} settings - Settings object
         * @param {object} settings.thisArg - A `this` context to use. If not set, assume `settings` _is_ `thisArg`
         * @param {bool} settings.multiArgs - Should multiple arguments be returned as an array?
         * @return {function} A promisified version of `original`
         */
        return function (t, n) {
          return function () {
            for (var a = arguments.length, i = Array(a), o = 0; o < a; o++)
              i[o] = arguments[o];
            var r = n && n.multiArgs,
              s = void 0;
            // Return the promisified function
            return (
              n && n.thisArg ? (s = n.thisArg) : n && (s = n),
              new e(function (e, n) {
                // Append the callback bound to the context
                i.push(function (t) {
                  if (t) return n(t);
                  for (
                    var a = arguments.length,
                      i = Array(a > 1 ? a - 1 : 0),
                      o = 1;
                    o < a;
                    o++
                  )
                    i[o - 1] = arguments[o];
                  if (!1 == !!r) return e(i[0]);
                  e(i);
                });
                // Call the function
                var a,
                  o = t.apply(s, i);
                // If it looks like original already returns a promise,
                // then just resolve with that promise. Hopefully, the callback function we added will just be ignored.
                (a = o) &&
                  'function' == typeof a.then &&
                  'function' == typeof a.catch &&
                  e(o);
              })
            );
          };
        };
      })();
    },
    /* 38 */
    /***/ function (e, t, n) {
      'use strict';
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    /* 39 */
    /***/ function (e, t, n) {
      'use strict';
      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */ function a(e) {
        this.message = e;
      }
      (a.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      }),
        (a.prototype.__CANCEL__ = !0),
        (e.exports = a);
    },
    /* 40 */
    /***/ function (e, t, n) {
      'use strict';
      n(93);
      const a = n(4).inherits,
        i = n(37),
        o = n(24).EventEmitter;
      /**
       * Base `http.Agent` implementation.
       * No pooling/keep-alive is implemented by default.
       *
       * @param {Function} callback
       * @api public
       */
      function r(e, t) {
        if (!(this instanceof r)) return new r(e, t);
        o.call(this),
          // The callback gets promisified if it has 3 parameters
          // (i.e. it has a callback function) lazily
          (this._promisifiedCallback = !1);
        let n = t;
        'function' == typeof e ? (this.callback = e) : e && (n = e),
          // timeout for the socket to be returned from the callback
          (this.timeout = (n && n.timeout) || null),
          (this.options = n);
      }
      (e.exports = r),
        a(r, o),
        /**
         * Override this function in your subclass!
         */
        (r.prototype.callback = function (e, t) {
          throw new Error(
            '"agent-base" has no default implementation, you must subclass and override `callback()`',
          );
        }),
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        (r.prototype.addRequest = function (e, t) {
          const n = Object.assign({}, t);
          // Set default `host` for HTTP to localhost
          null == n.host && (n.host = 'localhost'),
            // Set default `port` for HTTP if none was explicitly specified
            null == n.port && (n.port = n.secureEndpoint ? 443 : 80);
          const a = Object.assign({}, this.options, n);
          // Create the `stream.Duplex` instance
          let o;
          a.host &&
            a.path &&
            // If both a `host` and `path` are specified then it's most likely the
            // result of a `url.parse()` call... we need to remove the `path` portion so
            // that `net.connect()` doesn't attempt to open that as a unix socket file.
            delete a.path,
            delete a.agent,
            delete a.hostname,
            delete a._defaultAgent,
            delete a.defaultPort,
            delete a.createConnection,
            // Hint to use "Connection: close"
            // XXX: non-documented `http` module API :(
            (e._last = !0),
            (e.shouldKeepAlive = !1);
          let r = !1;
          const s = this.timeout,
            c = this.freeSocket;
          function p(t) {
            e._hadError ||
              (e.emit('error', t),
              // For Safety. Some additional errors might fire later on
              // and we need to make sure we don't double-fire the error event.
              (e._hadError = !0));
          }
          function u(e) {
            r || (null != o && (clearTimeout(o), (o = null)), p(e));
          }
          !this._promisifiedCallback &&
            this.callback.length >= 3 &&
            // Legacy callback function - convert to a Promise
            ((this.callback = i(this.callback, this)),
            (this._promisifiedCallback = !0)),
            s > 0 &&
              (o = setTimeout(function () {
                (o = null), (r = !0);
                const e = new Error(
                  'A "socket" was not created for HTTP request before ' +
                    s +
                    'ms',
                );
                (e.code = 'ETIMEOUT'), p(e);
              }, s));
          try {
            Promise.resolve(this.callback(e, a)).then(function (t) {
              var n;
              r ||
                (null != o && (clearTimeout(o), (o = null)),
                (n = t) && 'function' == typeof n.addRequest
                  ? // `socket` is actually an http.Agent instance, so relinquish
                    // responsibility for this `req` to the Agent from here on
                    t.addRequest(e, a)
                  : t
                  ? (t.on('free', function () {
                      c(t, a);
                    }),
                    e.onSocket(t))
                  : p(
                      new Error(
                        'no Duplex stream was returned to agent-base for `' +
                          e.method +
                          ' ' +
                          e.path +
                          '`',
                      ),
                    ));
            }, u);
          } catch (e) {
            Promise.reject(e).catch(u);
          }
        }),
        (r.prototype.freeSocket = function (e, t) {
          // TODO reuse sockets
          e.destroy();
        });
    },
    /* 41 */
    /***/ function (e, t) {
      var n;
        /* istanbul ignore next */
      (t = e.exports = d),
        (n =
          'object' == typeof process &&
          process.env &&
          process.env.NODE_DEBUG &&
          /\bsemver\b/i.test(process.env.NODE_DEBUG)
            ? function () {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift('SEMVER'), console.log.apply(console, e);
              }
            : function () {}),
        // Note: this is the semver.org version of the spec that it implements
        // Not necessarily the package version of this code.
        (t.SEMVER_SPEC_VERSION = '2.0.0');
      var a = 256,
        i =
          Number.MAX_SAFE_INTEGER ||
          /* istanbul ignore next */ 9007199254740991,
        o = (t.re = []),
        r = (t.src = []),
        s = (t.tokens = {}),
        c = 0;
      function p(e) {
        s[e] = c++;
      }
      // The following Regular Expressions can be used for tokenizing,
      // validating, and parsing SemVer version strings.
      // ## Numeric Identifier
      // A single `0`, or a non-zero digit followed by zero or more digits.
      p('NUMERICIDENTIFIER'),
        (r[s.NUMERICIDENTIFIER] = '0|[1-9]\\d*'),
        p('NUMERICIDENTIFIERLOOSE'),
        (r[s.NUMERICIDENTIFIERLOOSE] = '[0-9]+'),
        // ## Non-numeric Identifier
        // Zero or more digits, followed by a letter or hyphen, and then zero or
        // more letters, digits, or hyphens.
        p('NONNUMERICIDENTIFIER'),
        (r[s.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
        // ## Main Version
        // Three dot-separated numeric identifiers.
        p('MAINVERSION'),
        (r[s.MAINVERSION] =
          '(' +
          r[s.NUMERICIDENTIFIER] +
          ')\\.(' +
          r[s.NUMERICIDENTIFIER] +
          ')\\.(' +
          r[s.NUMERICIDENTIFIER] +
          ')'),
        p('MAINVERSIONLOOSE'),
        (r[s.MAINVERSIONLOOSE] =
          '(' +
          r[s.NUMERICIDENTIFIERLOOSE] +
          ')\\.(' +
          r[s.NUMERICIDENTIFIERLOOSE] +
          ')\\.(' +
          r[s.NUMERICIDENTIFIERLOOSE] +
          ')'),
        // ## Pre-release Version Identifier
        // A numeric identifier, or a non-numeric identifier.
        p('PRERELEASEIDENTIFIER'),
        (r[s.PRERELEASEIDENTIFIER] =
          '(?:' +
          r[s.NUMERICIDENTIFIER] +
          '|' +
          r[s.NONNUMERICIDENTIFIER] +
          ')'),
        p('PRERELEASEIDENTIFIERLOOSE'),
        (r[s.PRERELEASEIDENTIFIERLOOSE] =
          '(?:' +
          r[s.NUMERICIDENTIFIERLOOSE] +
          '|' +
          r[s.NONNUMERICIDENTIFIER] +
          ')'),
        // ## Pre-release Version
        // Hyphen, followed by one or more dot-separated pre-release version
        // identifiers.
        p('PRERELEASE'),
        (r[s.PRERELEASE] =
          '(?:-(' +
          r[s.PRERELEASEIDENTIFIER] +
          '(?:\\.' +
          r[s.PRERELEASEIDENTIFIER] +
          ')*))'),
        p('PRERELEASELOOSE'),
        (r[s.PRERELEASELOOSE] =
          '(?:-?(' +
          r[s.PRERELEASEIDENTIFIERLOOSE] +
          '(?:\\.' +
          r[s.PRERELEASEIDENTIFIERLOOSE] +
          ')*))'),
        // ## Build Metadata Identifier
        // Any combination of digits, letters, or hyphens.
        p('BUILDIDENTIFIER'),
        (r[s.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'),
        // ## Build Metadata
        // Plus sign, followed by one or more period-separated build metadata
        // identifiers.
        p('BUILD'),
        (r[s.BUILD] =
          '(?:\\+(' +
          r[s.BUILDIDENTIFIER] +
          '(?:\\.' +
          r[s.BUILDIDENTIFIER] +
          ')*))'),
        // ## Full Version String
        // A main version, followed optionally by a pre-release version and
        // build metadata.
        // Note that the only major, minor, patch, and pre-release sections of
        // the version string are capturing groups.  The build metadata is not a
        // capturing group, because it should not ever be used in version
        // comparison.
        p('FULL'),
        p('FULLPLAIN'),
        (r[s.FULLPLAIN] =
          'v?' + r[s.MAINVERSION] + r[s.PRERELEASE] + '?' + r[s.BUILD] + '?'),
        (r[s.FULL] = '^' + r[s.FULLPLAIN] + '$'),
        // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
        // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
        // common in the npm registry.
        p('LOOSEPLAIN'),
        (r[s.LOOSEPLAIN] =
          '[v=\\s]*' +
          r[s.MAINVERSIONLOOSE] +
          r[s.PRERELEASELOOSE] +
          '?' +
          r[s.BUILD] +
          '?'),
        p('LOOSE'),
        (r[s.LOOSE] = '^' + r[s.LOOSEPLAIN] + '$'),
        p('GTLT'),
        (r[s.GTLT] = '((?:<|>)?=?)'),
        // Something like "2.*" or "1.2.x".
        // Note that "x.x" is a valid xRange identifer, meaning "any version"
        // Only the first item is strictly required.
        p('XRANGEIDENTIFIERLOOSE'),
        (r[s.XRANGEIDENTIFIERLOOSE] = r[s.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'),
        p('XRANGEIDENTIFIER'),
        (r[s.XRANGEIDENTIFIER] = r[s.NUMERICIDENTIFIER] + '|x|X|\\*'),
        p('XRANGEPLAIN'),
        (r[s.XRANGEPLAIN] =
          '[v=\\s]*(' +
          r[s.XRANGEIDENTIFIER] +
          ')(?:\\.(' +
          r[s.XRANGEIDENTIFIER] +
          ')(?:\\.(' +
          r[s.XRANGEIDENTIFIER] +
          ')(?:' +
          r[s.PRERELEASE] +
          ')?' +
          r[s.BUILD] +
          '?)?)?'),
        p('XRANGEPLAINLOOSE'),
        (r[s.XRANGEPLAINLOOSE] =
          '[v=\\s]*(' +
          r[s.XRANGEIDENTIFIERLOOSE] +
          ')(?:\\.(' +
          r[s.XRANGEIDENTIFIERLOOSE] +
          ')(?:\\.(' +
          r[s.XRANGEIDENTIFIERLOOSE] +
          ')(?:' +
          r[s.PRERELEASELOOSE] +
          ')?' +
          r[s.BUILD] +
          '?)?)?'),
        p('XRANGE'),
        (r[s.XRANGE] = '^' + r[s.GTLT] + '\\s*' + r[s.XRANGEPLAIN] + '$'),
        p('XRANGELOOSE'),
        (r[s.XRANGELOOSE] =
          '^' + r[s.GTLT] + '\\s*' + r[s.XRANGEPLAINLOOSE] + '$'),
        // Coercion.
        // Extract anything that could conceivably be a part of a valid semver
        p('COERCE'),
        (r[s.COERCE] =
          '(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])'),
        p('COERCERTL'),
        (o[s.COERCERTL] = new RegExp(r[s.COERCE], 'g')),
        // Tilde ranges.
        // Meaning is "reasonably at or greater than"
        p('LONETILDE'),
        (r[s.LONETILDE] = '(?:~>?)'),
        p('TILDETRIM'),
        (r[s.TILDETRIM] = '(\\s*)' + r[s.LONETILDE] + '\\s+'),
        (o[s.TILDETRIM] = new RegExp(r[s.TILDETRIM], 'g'));
      p('TILDE'),
        (r[s.TILDE] = '^' + r[s.LONETILDE] + r[s.XRANGEPLAIN] + '$'),
        p('TILDELOOSE'),
        (r[s.TILDELOOSE] = '^' + r[s.LONETILDE] + r[s.XRANGEPLAINLOOSE] + '$'),
        // Caret ranges.
        // Meaning is "at least and backwards compatible with"
        p('LONECARET'),
        (r[s.LONECARET] = '(?:\\^)'),
        p('CARETTRIM'),
        (r[s.CARETTRIM] = '(\\s*)' + r[s.LONECARET] + '\\s+'),
        (o[s.CARETTRIM] = new RegExp(r[s.CARETTRIM], 'g'));
      p('CARET'),
        (r[s.CARET] = '^' + r[s.LONECARET] + r[s.XRANGEPLAIN] + '$'),
        p('CARETLOOSE'),
        (r[s.CARETLOOSE] = '^' + r[s.LONECARET] + r[s.XRANGEPLAINLOOSE] + '$'),
        // A simple gt/lt/eq thing, or just "" to indicate "any version"
        p('COMPARATORLOOSE'),
        (r[s.COMPARATORLOOSE] =
          '^' + r[s.GTLT] + '\\s*(' + r[s.LOOSEPLAIN] + ')$|^$'),
        p('COMPARATOR'),
        (r[s.COMPARATOR] =
          '^' + r[s.GTLT] + '\\s*(' + r[s.FULLPLAIN] + ')$|^$'),
        // An expression to strip any whitespace between the gtlt and the thing
        // it modifies, so that `> 1.2.3` ==> `>1.2.3`
        p('COMPARATORTRIM'),
        (r[s.COMPARATORTRIM] =
          '(\\s*)' +
          r[s.GTLT] +
          '\\s*(' +
          r[s.LOOSEPLAIN] +
          '|' +
          r[s.XRANGEPLAIN] +
          ')'),
        // this one has to use the /g flag
        (o[s.COMPARATORTRIM] = new RegExp(r[s.COMPARATORTRIM], 'g'));
      // Something like `1.2.3 - 1.2.4`
      // Note that these all use the loose form, because they'll be
      // checked against either the strict or loose comparator form
      // later.
      p('HYPHENRANGE'),
        (r[s.HYPHENRANGE] =
          '^\\s*(' +
          r[s.XRANGEPLAIN] +
          ')\\s+-\\s+(' +
          r[s.XRANGEPLAIN] +
          ')\\s*$'),
        p('HYPHENRANGELOOSE'),
        (r[s.HYPHENRANGELOOSE] =
          '^\\s*(' +
          r[s.XRANGEPLAINLOOSE] +
          ')\\s+-\\s+(' +
          r[s.XRANGEPLAINLOOSE] +
          ')\\s*$'),
        // Star ranges basically just allow anything at all.
        p('STAR'),
        (r[s.STAR] = '(<|>)?=?\\s*\\*');
      // Compile to actual regexp objects.
      // All are flag-free, unless they were created above with a flag.
      for (var u = 0; u < c; u++) n(u, r[u]), o[u] || (o[u] = new RegExp(r[u]));
      function l(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof d)
        )
          return e;
        if ('string' != typeof e) return null;
        if (e.length > a) return null;
        if (!(t.loose ? o[s.LOOSE] : o[s.FULL]).test(e)) return null;
        try {
          return new d(e, t);
        } catch (e) {
          return null;
        }
      }
      function d(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof d)
        ) {
          if (e.loose === t.loose) return e;
          e = e.version;
        } else if ('string' != typeof e)
          throw new TypeError('Invalid Version: ' + e);
        if (e.length > a)
          throw new TypeError('version is longer than ' + a + ' characters');
        if (!(this instanceof d)) return new d(e, t);
        n('SemVer', e, t), (this.options = t), (this.loose = !!t.loose);
        var r = e.trim().match(t.loose ? o[s.LOOSE] : o[s.FULL]);
        if (!r) throw new TypeError('Invalid Version: ' + e);
        if (
          ((this.raw = e),
          // these are actually numbers
          (this.major = +r[1]),
          (this.minor = +r[2]),
          (this.patch = +r[3]),
          this.major > i || this.major < 0)
        )
          throw new TypeError('Invalid major version');
        if (this.minor > i || this.minor < 0)
          throw new TypeError('Invalid minor version');
        if (this.patch > i || this.patch < 0)
          throw new TypeError('Invalid patch version');
        // numberify any prerelease numeric ids
        r[4]
          ? (this.prerelease = r[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                var t = +e;
                if (t >= 0 && t < i) return t;
              }
              return e;
            }))
          : (this.prerelease = []),
          (this.build = r[5] ? r[5].split('.') : []),
          this.format();
      }
      (t.parse = l),
        (t.valid = function (e, t) {
          var n = l(e, t);
          return n ? n.version : null;
        }),
        (t.clean = function (e, t) {
          var n = l(e.trim().replace(/^[=v]+/, ''), t);
          return n ? n.version : null;
        }),
        (t.SemVer = d),
        (d.prototype.format = function () {
          return (
            (this.version = this.major + '.' + this.minor + '.' + this.patch),
            this.prerelease.length &&
              (this.version += '-' + this.prerelease.join('.')),
            this.version
          );
        }),
        (d.prototype.toString = function () {
          return this.version;
        }),
        (d.prototype.compare = function (e) {
          return (
            n('SemVer.compare', this.version, this.options, e),
            e instanceof d || (e = new d(e, this.options)),
            this.compareMain(e) || this.comparePre(e)
          );
        }),
        (d.prototype.compareMain = function (e) {
          return (
            e instanceof d || (e = new d(e, this.options)),
            f(this.major, e.major) ||
              f(this.minor, e.minor) ||
              f(this.patch, e.patch)
          );
        }),
        (d.prototype.comparePre = function (e) {
          // NOT having a prerelease is > having one
          if (
            (e instanceof d || (e = new d(e, this.options)),
            this.prerelease.length && !e.prerelease.length)
          )
            return -1;
          if (!this.prerelease.length && e.prerelease.length) return 1;
          if (!this.prerelease.length && !e.prerelease.length) return 0;
          var t = 0;
          do {
            var a = this.prerelease[t],
              i = e.prerelease[t];
            if (
              (n('prerelease compare', t, a, i), void 0 === a && void 0 === i)
            )
              return 0;
            if (void 0 === i) return 1;
            if (void 0 === a) return -1;
            if (a !== i) return f(a, i);
          } while (++t);
        }),
        (d.prototype.compareBuild = function (e) {
          e instanceof d || (e = new d(e, this.options));
          var t = 0;
          do {
            var a = this.build[t],
              i = e.build[t];
            if (
              (n('prerelease compare', t, a, i), void 0 === a && void 0 === i)
            )
              return 0;
            if (void 0 === i) return 1;
            if (void 0 === a) return -1;
            if (a !== i) return f(a, i);
          } while (++t);
        }),
        // preminor will bump the version up to the next minor release, and immediately
        // down to pre-release. premajor and prepatch work the same way.
        (d.prototype.inc = function (e, t) {
          switch (e) {
            case 'premajor':
              (this.prerelease.length = 0),
                (this.patch = 0),
                (this.minor = 0),
                this.major++,
                this.inc('pre', t);
              break;
            case 'preminor':
              (this.prerelease.length = 0),
                (this.patch = 0),
                this.minor++,
                this.inc('pre', t);
              break;
            case 'prepatch':
              // If this is already a prerelease, it will bump to the next version
              // drop any prereleases that might already exist, since they are not
              // relevant at this point.
              (this.prerelease.length = 0),
                this.inc('patch', t),
                this.inc('pre', t);
              break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
              0 === this.prerelease.length && this.inc('patch', t),
                this.inc('pre', t);
              break;
            case 'major':
              // If this is a pre-major version, bump up to the same major version.
              // Otherwise increment major.
              // 1.0.0-5 bumps to 1.0.0
              // 1.1.0 bumps to 2.0.0
              (0 === this.minor &&
                0 === this.patch &&
                0 !== this.prerelease.length) ||
                this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case 'minor':
              // If this is a pre-minor version, bump up to the same minor version.
              // Otherwise increment minor.
              // 1.2.0-5 bumps to 1.2.0
              // 1.2.1 bumps to 1.3.0
              (0 === this.patch && 0 !== this.prerelease.length) ||
                this.minor++,
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case 'patch':
              // If this is not a pre-release version, it will increment the patch.
              // If it is a pre-release it will bump up to the same patch version.
              // 1.2.0-5 patches to 1.2.0
              // 1.2.0 patches to 1.2.1
              0 === this.prerelease.length && this.patch++,
                (this.prerelease = []);
              break;
            // This probably shouldn't be used publicly.
            // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
            case 'pre':
              if (0 === this.prerelease.length) this.prerelease = [0];
              else {
                for (var n = this.prerelease.length; --n >= 0; )
                  'number' == typeof this.prerelease[n] &&
                    (this.prerelease[n]++, (n = -2));
                -1 === n &&
                  // didn't increment anything
                  this.prerelease.push(0);
              }
              t &&
                // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                (this.prerelease[0] === t
                  ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                  : (this.prerelease = [t, 0]));
              break;
            default:
              throw new Error('invalid increment argument: ' + e);
          }
          return this.format(), (this.raw = this.version), this;
        }),
        (t.inc = function (e, t, n, a) {
          'string' == typeof n && ((a = n), (n = void 0));
          try {
            return new d(e, n).inc(t, a).version;
          } catch (e) {
            return null;
          }
        }),
        (t.diff = function (e, t) {
          if (g(e, t)) return null;
          var n = l(e),
            a = l(t),
            i = '';
          if (n.prerelease.length || a.prerelease.length) {
            i = 'pre';
            var o = 'prerelease';
          }
          for (var r in n)
            if (
              ('major' === r || 'minor' === r || 'patch' === r) &&
              n[r] !== a[r]
            )
              return i + r;
          return o; // may be undefined
        }),
        (t.compareIdentifiers = f);
      var m = /^[0-9]+$/;
      function f(e, t) {
        var n = m.test(e),
          a = m.test(t);
        return (
          n && a && ((e = +e), (t = +t)),
          e === t ? 0 : n && !a ? -1 : a && !n ? 1 : e < t ? -1 : 1
        );
      }
      function h(e, t, n) {
        return new d(e, n).compare(new d(t, n));
      }
      function v(e, t, n) {
        return h(e, t, n) > 0;
      }
      function x(e, t, n) {
        return h(e, t, n) < 0;
      }
      function g(e, t, n) {
        return 0 === h(e, t, n);
      }
      function b(e, t, n) {
        return 0 !== h(e, t, n);
      }
      function y(e, t, n) {
        return h(e, t, n) >= 0;
      }
      function E(e, t, n) {
        return h(e, t, n) <= 0;
      }
      function _(e, t, n, a) {
        switch (t) {
          case '===':
            return (
              'object' == typeof e && (e = e.version),
              'object' == typeof n && (n = n.version),
              e === n
            );
          case '!==':
            return (
              'object' == typeof e && (e = e.version),
              'object' == typeof n && (n = n.version),
              e !== n
            );
          case '':
          case '=':
          case '==':
            return g(e, n, a);
          case '!=':
            return b(e, n, a);
          case '>':
            return v(e, n, a);
          case '>=':
            return y(e, n, a);
          case '<':
            return x(e, n, a);
          case '<=':
            return E(e, n, a);
          default:
            throw new TypeError('Invalid operator: ' + t);
        }
      }
      function w(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof w)
        ) {
          if (e.loose === !!t.loose) return e;
          e = e.value;
        }
        if (!(this instanceof w)) return new w(e, t);
        n('comparator', e, t),
          (this.options = t),
          (this.loose = !!t.loose),
          this.parse(e),
          this.semver === O
            ? (this.value = '')
            : (this.value = this.operator + this.semver.version),
          n('comp', this);
      }
      (t.rcompareIdentifiers = function (e, t) {
        return f(t, e);
      }),
        (t.major = function (e, t) {
          return new d(e, t).major;
        }),
        (t.minor = function (e, t) {
          return new d(e, t).minor;
        }),
        (t.patch = function (e, t) {
          return new d(e, t).patch;
        }),
        (t.compare = h),
        (t.compareLoose = function (e, t) {
          return h(e, t, !0);
        }),
        (t.compareBuild = function (e, t, n) {
          var a = new d(e, n),
            i = new d(t, n);
          return a.compare(i) || a.compareBuild(i);
        }),
        (t.rcompare = function (e, t, n) {
          return h(t, e, n);
        }),
        (t.sort = function (e, n) {
          return e.sort(function (e, a) {
            return t.compareBuild(e, a, n);
          });
        }),
        (t.rsort = function (e, n) {
          return e.sort(function (e, a) {
            return t.compareBuild(a, e, n);
          });
        }),
        (t.gt = v),
        (t.lt = x),
        (t.eq = g),
        (t.neq = b),
        (t.gte = y),
        (t.lte = E),
        (t.cmp = _),
        (t.Comparator = w);
      var O = {};
      function T(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof T)
        )
          return e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease
            ? e
            : new T(e.raw, t);
        if (e instanceof w) return new T(e.value, t);
        if (!(this instanceof T)) return new T(e, t);
        if (
          ((this.options = t),
          (this.loose = !!t.loose),
          (this.includePrerelease = !!t.includePrerelease),
          // First, split based on boolean or ||
          (this.raw = e),
          (this.set = e
            .split(/\s*\|\|\s*/)
            .map(function (e) {
              return this.parseRange(e.trim());
            }, this)
            .filter(function (e) {
              // throw out any that are not relevant for whatever reason
              return e.length;
            })),
          !this.set.length)
        )
          throw new TypeError('Invalid SemVer Range: ' + e);
        this.format();
      }
      // take a set of comparators and determine whether there
      // exists a version which can satisfy it
      function R(e, t) {
        for (var n = !0, a = e.slice(), i = a.pop(); n && a.length; )
          (n = a.every(function (e) {
            return i.intersects(e, t);
          })),
            (i = a.pop());
        return n;
      }
      // Mostly just for testing and legacy API reasons
      function C(e) {
        return !e || 'x' === e.toLowerCase() || '*' === e;
      }
      // ~, ~> --> * (any, kinda silly)
      // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
      // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
      // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
      // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
      // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
      // This function is passed to string.replace(re[t.HYPHENRANGE])
      // M, m, patch, prerelease, build
      // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
      // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
      // 1.2 - 3.4 => >=1.2.0 <3.5.0
      function A(e, t, n, a, i, o, r, s, c, p, u, l, d) {
        return (
          (t = C(n)
            ? ''
            : C(a)
            ? '>=' + n + '.0.0'
            : C(i)
            ? '>=' + n + '.' + a + '.0'
            : '>=' + t) +
          ' ' +
          (s = C(c)
            ? ''
            : C(p)
            ? '<' + (+c + 1) + '.0.0'
            : C(u)
            ? '<' + c + '.' + (+p + 1) + '.0'
            : l
            ? '<=' + c + '.' + p + '.' + u + '-' + l
            : '<=' + s)
        ).trim();
      }
      // if ANY of the sets match ALL of its comparators, then pass
      function S(e, t, a) {
        for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
        if (t.prerelease.length && !a.includePrerelease) {
          // Find the set of versions that are allowed to have prereleases
          // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
          // That should allow `1.2.3-pr.2` to pass.
          // However, `1.2.4-alpha.notready` should NOT be allowed,
          // even though it's within the range set by the comparators.
          for (i = 0; i < e.length; i++)
            if (
              (n(e[i].semver),
              e[i].semver !== O && e[i].semver.prerelease.length > 0)
            ) {
              var o = e[i].semver;
              if (
                o.major === t.major &&
                o.minor === t.minor &&
                o.patch === t.patch
              )
                return !0;
            }
          // Version has a -pre, but it's not one of the ones we like.
          return !1;
        }
        return !0;
      }
      function k(e, t, n) {
        try {
          t = new T(t, n);
        } catch (e) {
          return !1;
        }
        return t.test(e);
      }
      function I(e, t, n, a) {
        var i, o, r, s, c;
        switch (((e = new d(e, a)), (t = new T(t, a)), n)) {
          case '>':
            (i = v), (o = E), (r = x), (s = '>'), (c = '>=');
            break;
          case '<':
            (i = x), (o = y), (r = v), (s = '<'), (c = '<=');
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        // If it satisifes the range it is not outside
        if (k(e, t, a)) return !1;
        // From now on, variable terms are as if we're in "gtr" mode.
        // but note that everything is flipped for the "ltr" function.
        for (var p = 0; p < t.set.length; ++p) {
          var u = null,
            l = null;
          // If the edge version comparator has a operator then our version
          // isn't outside it
          if (
            (t.set[p].forEach(function (e) {
              e.semver === O && (e = new w('>=0.0.0')),
                (u = u || e),
                (l = l || e),
                i(e.semver, u.semver, a)
                  ? (u = e)
                  : r(e.semver, l.semver, a) && (l = e);
            }),
            u.operator === s || u.operator === c)
          )
            return !1;
          // If the lowest version comparator has an operator and our version
          // is less than it then it isn't higher than the range
          if ((!l.operator || l.operator === s) && o(e, l.semver)) return !1;
          if (l.operator === c && r(e, l.semver)) return !1;
        }
        return !0;
      }
      (w.prototype.parse = function (e) {
        var t = this.options.loose ? o[s.COMPARATORLOOSE] : o[s.COMPARATOR],
          n = e.match(t);
        if (!n) throw new TypeError('Invalid comparator: ' + e);
        (this.operator = void 0 !== n[1] ? n[1] : ''),
          '=' === this.operator && (this.operator = ''),
          // if it literally is just '>' or '' then allow anything.
          n[2]
            ? (this.semver = new d(n[2], this.options.loose))
            : (this.semver = O);
      }),
        (w.prototype.toString = function () {
          return this.value;
        }),
        (w.prototype.test = function (e) {
          if (
            (n('Comparator.test', e, this.options.loose),
            this.semver === O || e === O)
          )
            return !0;
          if ('string' == typeof e)
            try {
              e = new d(e, this.options);
            } catch (e) {
              return !1;
            }
          return _(e, this.operator, this.semver, this.options);
        }),
        (w.prototype.intersects = function (e, t) {
          if (!(e instanceof w))
            throw new TypeError('a Comparator is required');
          var n;
          if (
            ((t && 'object' == typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            '' === this.operator)
          )
            return (
              '' === this.value ||
              ((n = new T(e.value, t)), k(this.value, n, t))
            );
          if ('' === e.operator)
            return (
              '' === e.value || ((n = new T(this.value, t)), k(e.semver, n, t))
            );
          var a = !(
              ('>=' !== this.operator && '>' !== this.operator) ||
              ('>=' !== e.operator && '>' !== e.operator)
            ),
            i = !(
              ('<=' !== this.operator && '<' !== this.operator) ||
              ('<=' !== e.operator && '<' !== e.operator)
            ),
            o = this.semver.version === e.semver.version,
            r = !(
              ('>=' !== this.operator && '<=' !== this.operator) ||
              ('>=' !== e.operator && '<=' !== e.operator)
            ),
            s =
              _(this.semver, '<', e.semver, t) &&
              ('>=' === this.operator || '>' === this.operator) &&
              ('<=' === e.operator || '<' === e.operator),
            c =
              _(this.semver, '>', e.semver, t) &&
              ('<=' === this.operator || '<' === this.operator) &&
              ('>=' === e.operator || '>' === e.operator);
          return a || i || (o && r) || s || c;
        }),
        (t.Range = T),
        (T.prototype.format = function () {
          return (
            (this.range = this.set
              .map(function (e) {
                return e.join(' ').trim();
              })
              .join('||')
              .trim()),
            this.range
          );
        }),
        (T.prototype.toString = function () {
          return this.range;
        }),
        (T.prototype.parseRange = function (e) {
          var t = this.options.loose;
          e = e.trim();
          // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
          var a = t ? o[s.HYPHENRANGELOOSE] : o[s.HYPHENRANGE];
          (e = e.replace(a, A)),
            n('hyphen replace', e),
            // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
            (e = e.replace(o[s.COMPARATORTRIM], '$1$2$3')),
            n('comparator trim', e, o[s.COMPARATORTRIM]),
            // normalize spaces
            (e = // `^ 1.2.3` => `^1.2.3`
            (e = // `~ 1.2.3` => `~1.2.3`
            (e = e.replace(o[s.TILDETRIM], '$1~')).replace(
              o[s.CARETTRIM],
              '$1^',
            ))
              .split(/\s+/)
              .join(' '));
          // At this point, the range is completely trimmed and
          // ready to be split into comparators.
          var i = t ? o[s.COMPARATORLOOSE] : o[s.COMPARATOR],
            r = e
              .split(' ')
              .map(function (e) {
                return (
                  (t = e),
                  (a = this.options),
                  n('comp', t, a),
                  (u = a),
                  (t = t
                    .trim()
                    .split(/\s+/)
                    .map(function (e) {
                      return (function (e, t) {
                        n('caret', e, t);
                        var a = t.loose ? o[s.CARETLOOSE] : o[s.CARET];
                        return e.replace(a, function (t, a, i, o, r) {
                          var s;
                          return (
                            n('caret', e, t, a, i, o, r),
                            C(a)
                              ? (s = '')
                              : C(i)
                              ? (s = '>=' + a + '.0.0 <' + (+a + 1) + '.0.0')
                              : C(o)
                              ? (s =
                                  '0' === a
                                    ? '>=' +
                                      a +
                                      '.' +
                                      i +
                                      '.0 <' +
                                      a +
                                      '.' +
                                      (+i + 1) +
                                      '.0'
                                    : '>=' +
                                      a +
                                      '.' +
                                      i +
                                      '.0 <' +
                                      (+a + 1) +
                                      '.0.0')
                              : r
                              ? (n('replaceCaret pr', r),
                                (s =
                                  '0' === a
                                    ? '0' === i
                                      ? '>=' +
                                        a +
                                        '.' +
                                        i +
                                        '.' +
                                        o +
                                        '-' +
                                        r +
                                        ' <' +
                                        a +
                                        '.' +
                                        i +
                                        '.' +
                                        (+o + 1)
                                      : '>=' +
                                        a +
                                        '.' +
                                        i +
                                        '.' +
                                        o +
                                        '-' +
                                        r +
                                        ' <' +
                                        a +
                                        '.' +
                                        (+i + 1) +
                                        '.0'
                                    : '>=' +
                                      a +
                                      '.' +
                                      i +
                                      '.' +
                                      o +
                                      '-' +
                                      r +
                                      ' <' +
                                      (+a + 1) +
                                      '.0.0'))
                              : (n('no pr'),
                                (s =
                                  '0' === a
                                    ? '0' === i
                                      ? '>=' +
                                        a +
                                        '.' +
                                        i +
                                        '.' +
                                        o +
                                        ' <' +
                                        a +
                                        '.' +
                                        i +
                                        '.' +
                                        (+o + 1)
                                      : '>=' +
                                        a +
                                        '.' +
                                        i +
                                        '.' +
                                        o +
                                        ' <' +
                                        a +
                                        '.' +
                                        (+i + 1) +
                                        '.0'
                                    : '>=' +
                                      a +
                                      '.' +
                                      i +
                                      '.' +
                                      o +
                                      ' <' +
                                      (+a + 1) +
                                      '.0.0')),
                            n('caret return', s),
                            s
                          );
                        });
                      })(e, u);
                    })
                    .join(' ')),
                  n('caret', t),
                  (p = a),
                  (t = t
                    .trim()
                    .split(/\s+/)
                    .map(function (e) {
                      return (
                        (t = e),
                        (a = p.loose ? o[s.TILDELOOSE] : o[s.TILDE]),
                        t.replace(a, function (e, a, i, o, r) {
                          var s;
                          return (
                            n('tilde', t, e, a, i, o, r),
                            C(a)
                              ? (s = '')
                              : C(i)
                              ? (s = '>=' + a + '.0.0 <' + (+a + 1) + '.0.0')
                              : C(o)
                              ? // ~1.2 == >=1.2.0 <1.3.0
                                (s =
                                  '>=' +
                                  a +
                                  '.' +
                                  i +
                                  '.0 <' +
                                  a +
                                  '.' +
                                  (+i + 1) +
                                  '.0')
                              : r
                              ? (n('replaceTilde pr', r),
                                (s =
                                  '>=' +
                                  a +
                                  '.' +
                                  i +
                                  '.' +
                                  o +
                                  '-' +
                                  r +
                                  ' <' +
                                  a +
                                  '.' +
                                  (+i + 1) +
                                  '.0'))
                              : // ~1.2.3 == >=1.2.3 <1.3.0
                                (s =
                                  '>=' +
                                  a +
                                  '.' +
                                  i +
                                  '.' +
                                  o +
                                  ' <' +
                                  a +
                                  '.' +
                                  (+i + 1) +
                                  '.0'),
                            n('tilde return', s),
                            s
                          );
                        })
                      );
                      var t, a;
                      // ^ --> * (any, kinda silly)
                      // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
                      // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
                      // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
                      // ^1.2.3 --> >=1.2.3 <2.0.0
                      // ^1.2.0 --> >=1.2.0 <2.0.0
                    })
                    .join(' ')),
                  n('tildes', t),
                  n('replaceXRanges', (r = t), (c = a)),
                  (t = r
                    .split(/\s+/)
                    .map(function (e) {
                      return (function (e, t) {
                        e = e.trim();
                        var a = t.loose ? o[s.XRANGELOOSE] : o[s.XRANGE];
                        return e.replace(a, function (a, i, o, r, s, c) {
                          n('xRange', e, a, i, o, r, s, c);
                          var p = C(o),
                            u = p || C(r),
                            l = u || C(s),
                            d = l;
                          return (
                            '=' === i && d && (i = ''),
                            // if we're including prereleases in the match, then we need
                            // to fix this to -0, the lowest possible prerelease value
                            (c = t.includePrerelease ? '-0' : ''),
                            p
                              ? // nothing is allowed
                                (a = '>' === i || '<' === i ? '<0.0.0-0' : '*')
                              : i && d
                              ? // we know patch is an x, because we have any x at all.
                                // replace X with 0
                                (u && (r = 0),
                                (s = 0),
                                '>' === i
                                  ? // >1 => >=2.0.0
                                    // >1.2 => >=1.3.0
                                    // >1.2.3 => >= 1.2.4
                                    ((i = '>='),
                                    u
                                      ? ((o = +o + 1), (r = 0), (s = 0))
                                      : ((r = +r + 1), (s = 0)))
                                  : '<=' === i &&
                                    // <=0.7.x is actually <0.8.0, since any 0.7.x should
                                    // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                                    ((i = '<'),
                                    u ? (o = +o + 1) : (r = +r + 1)),
                                (a = i + o + '.' + r + '.' + s + c))
                              : u
                              ? (a =
                                  '>=' +
                                  o +
                                  '.0.0' +
                                  c +
                                  ' <' +
                                  (+o + 1) +
                                  '.0.0' +
                                  c)
                              : l &&
                                (a =
                                  '>=' +
                                  o +
                                  '.' +
                                  r +
                                  '.0' +
                                  c +
                                  ' <' +
                                  o +
                                  '.' +
                                  (+r + 1) +
                                  '.0' +
                                  c),
                            n('xRange return', a),
                            a
                          );
                        });
                      })(
                        // Because * is AND-ed with everything else in the comparator,
                        // and '' means "any version", just remove the *s entirely.
                        e,
                        c,
                      );
                    })
                    .join(' ')),
                  n('xrange', t),
                  n('replaceStars', (i = t), a),
                  (t = i.trim().replace(o[s.STAR], '')),
                  n('stars', t),
                  t
                );
                // comprised of xranges, tildes, stars, and gtlt's at this point.
                // already replaced the hyphen ranges
                // turn into a set of JUST comparators.
                var t, a, i, r, c, p, u;
              }, this)
              .join(' ')
              .split(/\s+/);
          return (
            this.options.loose &&
              // in loose mode, throw out any that are not valid comparators
              (r = r.filter(function (e) {
                return !!e.match(i);
              })),
            (r = r.map(function (e) {
              return new w(e, this.options);
            }, this))
          );
        }),
        (T.prototype.intersects = function (e, t) {
          if (!(e instanceof T)) throw new TypeError('a Range is required');
          return this.set.some(function (n) {
            return (
              R(n, t) &&
              e.set.some(function (e) {
                return (
                  R(e, t) &&
                  n.every(function (n) {
                    return e.every(function (e) {
                      return n.intersects(e, t);
                    });
                  })
                );
              })
            );
          });
        }),
        (t.toComparators = function (e, t) {
          return new T(e, t).set.map(function (e) {
            return e
              .map(function (e) {
                return e.value;
              })
              .join(' ')
              .trim()
              .split(' ');
          });
        }),
        (T.prototype.test = function (e) {
          if (!e) return !1;
          if ('string' == typeof e)
            try {
              e = new d(e, this.options);
            } catch (e) {
              return !1;
            }
          for (var t = 0; t < this.set.length; t++)
            if (S(this.set[t], e, this.options)) return !0;
          return !1;
        }),
        (t.satisfies = k),
        (t.maxSatisfying = function (e, t, n) {
          var a = null,
            i = null;
          try {
            var o = new T(t, n);
          } catch (e) {
            return null;
          }
          return (
            e.forEach(function (e) {
              o.test(e) &&
                // satisfies(v, range, options)
                ((a && -1 !== i.compare(e)) ||
                  (i = new d(
                    // compare(max, v, true)
                    (a = e),
                    n,
                  )));
            }),
            a
          );
        }),
        (t.minSatisfying = function (e, t, n) {
          var a = null,
            i = null;
          try {
            var o = new T(t, n);
          } catch (e) {
            return null;
          }
          return (
            e.forEach(function (e) {
              o.test(e) &&
                // satisfies(v, range, options)
                ((a && 1 !== i.compare(e)) ||
                  (i = new d(
                    // compare(min, v, true)
                    (a = e),
                    n,
                  )));
            }),
            a
          );
        }),
        (t.minVersion = function (e, t) {
          e = new T(e, t);
          var n = new d('0.0.0');
          if (e.test(n)) return n;
          if (((n = new d('0.0.0-0')), e.test(n))) return n;
          n = null;
          for (var a = 0; a < e.set.length; ++a) {
            var i = e.set[a];
            i.forEach(function (e) {
              // Clone to avoid manipulating the comparator's semver object.
              var t = new d(e.semver.version);
              switch (e.operator) {
                case '>':
                  0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                    (t.raw = t.format());
                  /* fallthrough */
                case '':
                case '>=':
                  (n && !v(n, t)) || (n = t);
                  break;
                case '<':
                case '<=':
                  /* Ignore maximum versions */
                  break;
                /* istanbul ignore next */ default:
                  throw new Error('Unexpected operation: ' + e.operator);
              }
            });
          }
          if (n && e.test(n)) return n;
          return null;
        }),
        (t.validRange = function (e, t) {
          try {
            // Return '*' instead of '' so that truthiness works.
            // This will throw if it's invalid anyway
            return new T(e, t).range || '*';
          } catch (e) {
            return null;
          }
        }),
        // Determine if version is less than all the versions possible in the range
        (t.ltr = function (e, t, n) {
          return I(e, t, '<', n);
        }),
        // Determine if version is greater than all the versions possible in the range.
        (t.gtr = function (e, t, n) {
          return I(e, t, '>', n);
        }),
        (t.outside = I),
        (t.prerelease = function (e, t) {
          var n = l(e, t);
          return n && n.prerelease.length ? n.prerelease : null;
        }),
        (t.intersects = function (e, t, n) {
          return (e = new T(e, n)), (t = new T(t, n)), e.intersects(t);
        }),
        (t.coerce = function (e, t) {
          if (e instanceof d) return e;
          'number' == typeof e && (e = String(e));
          if ('string' != typeof e) return null;
          var n = null;
          if ((t = t || {}).rtl) {
            for (
              // Find the right-most coercible string that does not share
              // a terminus with a more left-ward coercible string.
              // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
              //
              // Walk through the string checking with a /g regexp
              // Manually set the index so as to pick up overlapping matches.
              // Stop when we get a match that ends at the string end, since no
              // coercible string can be more right-ward without the same terminus.
              var a;
              (a = o[s.COERCERTL].exec(e)) &&
              (!n || n.index + n[0].length !== e.length);

            )
              (n && a.index + a[0].length === n.index + n[0].length) || (n = a),
                (o[s.COERCERTL].lastIndex =
                  a.index + a[1].length + a[2].length);
            // leave it in a clean state
            o[s.COERCERTL].lastIndex = -1;
          } else n = e.match(o[s.COERCE]);
          if (null === n) return null;
          return l(n[2] + '.' + (n[3] || '0') + '.' + (n[4] || '0'), t);
        });
      /***/
    },
    /* 42 */
    /***/ function (e, t) {
      e.exports = {
        name: 'hydrogen-base-sdk',
        version: '3.20.0',
        versions: { v2: '2.13.0', v3: '3.20.0' },
        defaultVersionKey: 'v2',
        retainedVersions: [
          '2.13.0',
          '3.2.0',
          '3.3.0',
          '3.4.0',
          '3.5.0',
          '3.6.0',
          '3.7.0',
          '3.8.0',
          '3.9.0',
          '3.10.0',
          '3.11.0',
          '3.11.1',
          '3.12.0',
          '3.13.0',
          '3.13.1',
          '3.13.2',
          '3.14.0',
          '3.15.0',
          '3.16.0',
          '3.17.0',
          '3.18.0',
          '3.19.0',
          '3.20.0',
        ],
        description: '',
        main: 'src/index.js',
        dependencies: {
          '@babel/core': '^7.6.3',
          '@babel/preset-env': '^7.6.3',
          'axios-https-proxy-fix': '^0.17.1',
          'babel-loader': '^8.0.6',
          'form-data': '^2.3.2',
          glob: '^7.1.6',
          'http-proxy-agent': '^2.1.0',
          'https-proxy-agent':
            'github:ifanrx/node-https-proxy-agent#599ad27df1b2ad37493d820212b415200daeb510',
          lodash: '^4.17.4',
          'lodash.clonedeep': '^4.5.0',
          request: '^2.83.0',
          'request-promise-native': '^1.0.5',
          semver: '^6.3.0',
        },
        scripts: {
          lint: 'eslint src/**/*.js',
          dev: 'webpack --progress --colors --watch --env.version=3',
          build: 'npm run build-v3',
          'build-v3': 'webpack --progress --colors --env.version=3',
          analyse:
            'webpack --config webpack.config.js --profile --json > webpack-stats.json',
          test: 'npm run test-unit && npm run test-integration',
          'test-integration': 'ava ./test/*.test.js',
          'test-unit': 'ava ./unit-test/*.test.js',
          'test-dev': 'NODE_ENV=dev ava ./test/*.test.js',
          'test-data-import': 'ava ./test/test-data-import.js',
        },
        author: '',
        license: 'ISC',
        devDependencies: {
          ava: '^0.25.0',
          eslint: '^4.15.0',
          proxyquire: '^2.1.3',
          rewire: '^4.0.1',
          'uglifyjs-webpack-plugin': '^1.1.6',
          webpack: '^3.10.0',
        },
      };
      /***/
    },
    /* 43 */
    /***/ function (e, t, n) {
      var a = n(44),
        i = n(45);
      // API
      e.exports =
        /**
         * Iterates over each job object
         *
         * @param {array|object} list - array or object (named list) to iterate over
         * @param {function} iterator - iterator to run
         * @param {object} state - current job status
         * @param {function} callback - invoked when all elements processed
         */
        function (e, t, n, o) {
          // store current index
          var r = n.keyedList ? n.keyedList[n.index] : n.index;
          n.jobs[r] =
            /**
             * Runs iterator over provided job element
             *
             * @param   {function} iterator - iterator to invoke
             * @param   {string|number} key - key/index of the element in the list of jobs
             * @param   {mixed} item - job description
             * @param   {function} callback - invoked after iterator is done with the job
             * @returns {function|mixed} - job abort function or something else
             */
            (function (e, t, n, i) {
              var o;
              // allow shortcut if iterator expects only two arguments
              o = 2 == e.length ? e(n, a(i)) : e(n, t, a(i));
              return o;
            })(/***/ t, r, e[r], function (e, t) {
              // don't repeat yourself
              // skip secondary callbacks
              r in n.jobs &&
                // clean up jobs
                (delete n.jobs[r],
                e
                  ? // don't process rest of the results
                    // stop still active jobs
                    // and reset the list
                    i(n)
                  : (n.results[r] = t),
                // return salvaged results
                o(e, n.results));
            });
        };
    },
    /* 44 */
    /***/ function (e, t, n) {
      var a = n(105);
      // API
      e.exports =
        /**
         * Runs provided callback asynchronously
         * even if callback itself is not
         *
         * @param   {function} callback - callback to invoke
         * @returns {function} - augmented callback
         */
        function (e) {
          var t = !1;
          // check if async happened
          return (
            a(function () {
              t = !0;
            }),
            function (n, i) {
              t
                ? e(n, i)
                : a(function () {
                    e(n, i);
                  });
            }
          );
        };
      /***/
    },
    /* 45 */
    /***/ function (e, t) {
      // API
      e.exports =
        /**
         * Aborts leftover active jobs
         *
         * @param {object} state - current state object
         */
        function (e) {
          Object.keys(e.jobs).forEach(
            /**
             * Cleans up leftover job by invoking abort function for the provided job id
             *
             * @this  state
             * @param {string|number} key - job id to abort
             */
            function (e) {
              'function' == typeof this.jobs[e] && this.jobs[e]();
            }
              /***/ .bind(e),
          ),
            // reset leftover jobs
            (e.jobs = {});
        };
    },
    /* 46 */
    /***/ function (e, t) {
      // API
      e.exports =
        /**
         * Creates initial state object
         * for iteration over list
         *
         * @param   {array|object} list - list to iterate over
         * @param   {function|null} sortMethod - function to use for keys sort,
         *                                     or `null` to keep them as is
         * @returns {object} - initial state object
         */
        function (e, t) {
          var n = !Array.isArray(e),
            a = {
              index: 0,
              keyedList: n || t ? Object.keys(e) : null,
              jobs: {},
              results: n ? {} : [],
              size: n ? Object.keys(e).length : e.length,
            };
          t &&
            // sort array keys based on it's values
            // sort object's keys just on own merit
            a.keyedList.sort(
              n
                ? t
                : function (n, a) {
                    return t(e[n], e[a]);
                  },
            );
          return a;
        };
      /***/
    },
    /* 47 */
    /***/ function (e, t, n) {
      var a = n(45),
        i = n(44);
      // API
      e.exports =
        /**
         * Terminates jobs in the attached state context
         *
         * @this  AsyncKitState#
         * @param {function} callback - final callback to invoke after termination
         */
        function (e) {
          if (!Object.keys(this.jobs).length) return;
          // fast forward iteration index
          (this.index = this.size),
            // abort jobs
            a(this),
            // send back results we have so far
            i(e)(null, this.results);
        };
      /***/
    },
    /* 48 */
    /***/ function (e, t, n) {
      var a = n(43),
        i = n(46),
        o = n(47);
      // Public API
      /*
       * -- Sort methods
       */
      /**
       * sort helper to sort array elements in ascending order
       *
       * @param   {mixed} a - an item to compare
       * @param   {mixed} b - an item to compare
       * @returns {number} - comparison result
       */
      function r(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      /**
       * sort helper to sort array elements in descending order
       *
       * @param   {mixed} a - an item to compare
       * @param   {mixed} b - an item to compare
       * @returns {number} - comparison result
       */ (e.exports =
        /**
         * Runs iterator over provided sorted array elements in series
         *
         * @param   {array|object} list - array or object (named list) to iterate over
         * @param   {function} iterator - iterator to run
         * @param   {function} sortMethod - custom sort function
         * @param   {function} callback - invoked when all elements processed
         * @returns {function} - jobs terminator
         */
        function (e, t, n, r) {
          var s = i(e, n);
          return (
            a(e, t, s, function n(i, o) {
              i
                ? r(i, o)
                : (s.index++,
                  // are we there yet?
                  s.index < (s.keyedList || e).length
                    ? a(e, t, s, n)
                    : // done here
                      r(null, s.results));
            }),
            o.bind(s, r)
          );
        }),
        // sorting helpers
        (e.exports.ascending = r),
        (e.exports.descending = function (e, t) {
          return -1 * r(e, t);
        });
      /***/
    },
    /* 49 */
    /***/ function (e, t, n) {
      var a = n(109).Symbol;
      /** Built-in value references. */ e.exports = a;
    },
    /* 50 */
    /***/ function (e, t) {
      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      var n = Array.isArray;
      e.exports = n;
    },
    /* 51 */
    /***/ function (e, t, n) {
      var a = n(27),
        i = n(28),
        o = '[object Number]';
      /** `Object#toString` result references. */ e.exports =
        /**
         * Checks if `value` is classified as a `Number` primitive or object.
         *
         * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
         * classified as numbers, use the `_.isFinite` method.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a number, else `false`.
         * @example
         *
         * _.isNumber(3);
         * // => true
         *
         * _.isNumber(Number.MIN_VALUE);
         * // => true
         *
         * _.isNumber(Infinity);
         * // => true
         *
         * _.isNumber('3');
         * // => false
         */
        function (e) {
          return 'number' == typeof e || (i(e) && a(e) == o);
        };
    },
    /* 52 */
    /***/ function (e, t, n) {
      // Approach:
      //
      // 1. Get the minimatch set
      // 2. For each pattern in the set, PROCESS(pattern, false)
      // 3. Store matches per-set, then uniq them
      //
      // PROCESS(pattern, inGlobStar)
      // Get the first [n] items from pattern that are all strings
      // Join these together.  This is PREFIX.
      //   If there is no more remaining, then stat(PREFIX) and
      //   add to matches if it succeeds.  END.
      //
      // If inGlobStar and PREFIX is symlink and points to dir
      //   set ENTRIES = []
      // else readdir(PREFIX) as ENTRIES
      //   If fail, END
      //
      // with ENTRIES
      //   If pattern[n] is GLOBSTAR
      //     // handle the case where the globstar match is empty
      //     // by pruning it out, and testing the resulting pattern
      //     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
      //     // handle other cases.
      //     for ENTRY in ENTRIES (not dotfiles)
      //       // attach globstar + tail onto the entry
      //       // Mark that this entry is a globstar match
      //       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
      //
      //   else // not globstar
      //     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
      //       Test ENTRY against pattern[n]
      //       If fails, continue
      //       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
      //
      // Caveat:
      //   Cache all stats and readdirs results to minimize syscall.  Since all
      //   we ever care about is existence and directory-ness, we can just keep
      //   `true` for files, and [children,...] for directories, or `false` for
      //   things that don't exist.
      e.exports = b;
      var a = n(9),
        i = n(53),
        o = n(29),
        r = (o.Minimatch, n(145)),
        s = n(24).EventEmitter,
        c = n(8),
        p = n(20),
        u = n(30),
        l = n(147),
        d = n(54),
        m = (d.alphasort, d.alphasorti, d.setopts),
        f = d.ownProp,
        h = n(148),
        v = (n(4), d.childrenIgnored),
        x = d.isIgnored,
        g = n(56);
      function b(e, t, n) {
        if (
          ('function' == typeof t && ((n = t), (t = {})), t || (t = {}), t.sync)
        ) {
          if (n) throw new TypeError('callback provided to sync glob');
          return l(e, t);
        }
        return new E(e, t, n);
      }
      b.sync = l;
      var y = (b.GlobSync = l.GlobSync);
      // old api surface
      function E(e, t, n) {
        if (('function' == typeof t && ((n = t), (t = null)), t && t.sync)) {
          if (n) throw new TypeError('callback provided to sync glob');
          return new y(e, t);
        }
        if (!(this instanceof E)) return new E(e, t, n);
        m(this, e, t), (this._didRealPath = !1);
        // process each pattern in the minimatch set
        var a = this.minimatch.set.length;
        // The matches are stored as {<filename>: true,...} so that
        // duplicates are automagically pruned.
        // Later, we do an Object.keys() on these.
        // Keep them as a list so we can fill in when nonull is set.
        (this.matches = new Array(a)),
          'function' == typeof n &&
            ((n = g(n)),
            this.on('error', n),
            this.on('end', function (e) {
              n(null, e);
            }));
        var i = this;
        if (
          ((this._processing = 0),
          (this._emitQueue = []),
          (this._processQueue = []),
          (this.paused = !1),
          this.noprocess)
        )
          return this;
        if (0 === a) return s();
        for (var o = !0, r = 0; r < a; r++)
          this._process(this.minimatch.set[r], r, !1, s);
        function s() {
          --i._processing,
            i._processing <= 0 &&
              (o
                ? process.nextTick(function () {
                    i._finish();
                  })
                : i._finish());
        }
        o = !1;
      }
      (b.glob = b),
        (b.hasMagic = function (e, t) {
          var n = (function (e, t) {
            if (null === t || 'object' != typeof t) return e;
            for (var n = Object.keys(t), a = n.length; a--; ) e[n[a]] = t[n[a]];
            return e;
          })({}, t);
          n.noprocess = !0;
          var a = new E(e, n).minimatch.set;
          if (!e) return !1;
          if (a.length > 1) return !0;
          for (var i = 0; i < a[0].length; i++)
            if ('string' != typeof a[0][i]) return !0;
          return !1;
        }),
        (b.Glob = E),
        r(E, s),
        (E.prototype._finish = function () {
          if ((p(this instanceof E), !this.aborted)) {
            if (this.realpath && !this._didRealpath) return this._realpath();
            d.finish(this), this.emit('end', this.found);
          }
        }),
        (E.prototype._realpath = function () {
          if (!this._didRealpath) {
            this._didRealpath = !0;
            var e = this.matches.length;
            if (0 === e) return this._finish();
            for (var t = this, n = 0; n < this.matches.length; n++)
              this._realpathSet(n, a);
          }
          function a() {
            0 == --e && t._finish();
          }
        }),
        (E.prototype._realpathSet = function (e, t) {
          var n = this.matches[e];
          if (!n) return t();
          var a = Object.keys(n),
            o = this,
            r = a.length;
          if (0 === r) return t();
          var s = (this.matches[e] = Object.create(null));
          a.forEach(function (n, a) {
            // If there's a problem with the stat, then it means that
            // one or more of the links in the realpath couldn't be
            // resolved.  just return the abs value in that case.
            (n = o._makeAbs(n)),
              i.realpath(n, o.realpathCache, function (a, i) {
                a
                  ? 'stat' === a.syscall
                    ? (s[n] = !0)
                    : o.emit('error', a)
                  : (s[i] = !0), // srsly wtf right here
                  0 == --r && ((o.matches[e] = s), t());
              });
          });
        }),
        (E.prototype._mark = function (e) {
          return d.mark(this, e);
        }),
        (E.prototype._makeAbs = function (e) {
          return d.makeAbs(this, e);
        }),
        (E.prototype.abort = function () {
          (this.aborted = !0), this.emit('abort');
        }),
        (E.prototype.pause = function () {
          this.paused || ((this.paused = !0), this.emit('pause'));
        }),
        (E.prototype.resume = function () {
          if (this.paused) {
            if (
              (this.emit('resume'), (this.paused = !1), this._emitQueue.length)
            ) {
              var e = this._emitQueue.slice(0);
              this._emitQueue.length = 0;
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                this._emitMatch(n[0], n[1]);
              }
            }
            if (this._processQueue.length) {
              var a = this._processQueue.slice(0);
              this._processQueue.length = 0;
              for (t = 0; t < a.length; t++) {
                var i = a[t];
                this._processing--, this._process(i[0], i[1], i[2], i[3]);
              }
            }
          }
        }),
        (E.prototype._process = function (e, t, n, a) {
          if ((p(this instanceof E), p('function' == typeof a), !this.aborted))
            if ((this._processing++, this.paused))
              this._processQueue.push([e, t, n, a]);
            else {
              for (
                //console.error('PROCESS %d', this._processing, pattern)
                // Get the first [n] parts of pattern that are all strings.
                var i, r = 0;
                'string' == typeof e[r];

              )
                r++;
              // now n is the index of the first one that is *not* a string.
              // see if there's anything else
              switch (r) {
                // if not, then this is rather simple
                case e.length:
                  return void this._processSimple(e.join('/'), t, a);
                case 0:
                  // pattern *starts* with some non-trivial item.
                  // going to readdir(cwd), but not include the prefix in matches.
                  i = null;
                  break;
                default:
                  // pattern has some string bits in the front.
                  // whatever it starts with, whether that's 'absolute' like /foo/bar,
                  // or 'relative' like '../baz'
                  i = e.slice(0, r).join('/');
              }
              var s,
                c = e.slice(r);
              // get the list of entries.
              null === i
                ? (s = '.')
                : u(i) || u(e.join('/'))
                ? ((i && u(i)) || (i = '/' + i), (s = i))
                : (s = i);
              var l = this._makeAbs(s);
              //if ignored, skip _processing
              if (v(this, s)) return a();
              c[0] === o.GLOBSTAR
                ? this._processGlobStar(i, s, l, c, t, n, a)
                : this._processReaddir(i, s, l, c, t, n, a);
            }
        }),
        (E.prototype._processReaddir = function (e, t, n, a, i, o, r) {
          var s = this;
          this._readdir(n, o, function (c, p) {
            return s._processReaddir2(e, t, n, a, i, o, p, r);
          });
        }),
        (E.prototype._processReaddir2 = function (e, t, n, a, i, o, r, s) {
          // if the abs isn't a dir, then nothing can match!
          if (!r) return s();
          // It will only match dot entries if it starts with a dot, or if
          // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
          for (
            var p = a[0],
              u = !!this.minimatch.negate,
              l = p._glob,
              d = this.dot || '.' === l.charAt(0),
              m = [],
              f = 0;
            f < r.length;
            f++
          ) {
            if ('.' !== (v = r[f]).charAt(0) || d)
              (u && !e ? !v.match(p) : v.match(p)) && m.push(v);
          }
          //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)
          var h = m.length;
          // If there are no matched entries, then nothing matches.
          if (0 === h) return s();
          // if this is the last remaining pattern bit, then no need for
          // an additional stat *unless* the user has specified mark or
          // stat explicitly.  We know they exist, since readdir returned
          // them.
          if (1 === a.length && !this.mark && !this.stat) {
            this.matches[i] || (this.matches[i] = Object.create(null));
            for (f = 0; f < h; f++) {
              var v = m[f];
              e && (v = '/' !== e ? e + '/' + v : e + v),
                '/' !== v.charAt(0) ||
                  this.nomount ||
                  (v = c.join(this.root, v)),
                this._emitMatch(i, v);
            }
            // This was the last one, and no stats were needed
            return s();
          }
          // now test all matched entries as stand-ins for that part
          // of the pattern.
          a.shift();
          for (f = 0; f < h; f++) {
            v = m[f];
            e && (v = '/' !== e ? e + '/' + v : e + v),
              this._process([v].concat(a), i, o, s);
          }
          s();
        }),
        (E.prototype._emitMatch = function (e, t) {
          if (!this.aborted && !x(this, t))
            if (this.paused) this._emitQueue.push([e, t]);
            else {
              var n = u(t) ? t : this._makeAbs(t);
              if (
                (this.mark && (t = this._mark(t)),
                this.absolute && (t = n),
                !this.matches[e][t])
              ) {
                if (this.nodir) {
                  var a = this.cache[n];
                  if ('DIR' === a || Array.isArray(a)) return;
                }
                this.matches[e][t] = !0;
                var i = this.statCache[n];
                i && this.emit('stat', t, i), this.emit('match', t);
              }
            }
        }),
        (E.prototype._readdirInGlobStar = function (e, t) {
          if (!this.aborted) {
            // follow all symlinked directories forever
            // just proceed as if this is a non-globstar situation
            if (this.follow) return this._readdir(e, !1, t);
            var n = this,
              i = h('lstat\0' + e, function (a, i) {
                if (a && 'ENOENT' === a.code) return t();
                var o = i && i.isSymbolicLink();
                // If it's not a symlink or a dir, then it's definitely a regular file.
                // don't bother doing a readdir in that case.
                (n.symlinks[e] = o),
                  o || !i || i.isDirectory()
                    ? n._readdir(e, !1, t)
                    : ((n.cache[e] = 'FILE'), t());
              });
            i && a.lstat(e, i);
          }
        }),
        (E.prototype._readdir = function (e, t, n) {
          if (!this.aborted && (n = h('readdir\0' + e + '\0' + t, n))) {
            //console.error('RD %j %j', +inGlobStar, abs)
            if (t && !f(this.symlinks, e)) return this._readdirInGlobStar(e, n);
            if (f(this.cache, e)) {
              var i = this.cache[e];
              if (!i || 'FILE' === i) return n();
              if (Array.isArray(i)) return n(null, i);
            }
            var o, r, s;
            a.readdir(
              e,
              ((o = this),
              (r = e),
              (s = n),
              function (e, t) {
                e ? o._readdirError(r, e, s) : o._readdirEntries(r, t, s);
              }),
            );
          }
        }),
        (E.prototype._readdirEntries = function (e, t, n) {
          if (!this.aborted) {
            // if we haven't asked to stat everything, then just
            // assume that everything in there exists, so we can avoid
            // having to stat it a second time.
            if (!this.mark && !this.stat)
              for (var a = 0; a < t.length; a++) {
                var i = t[a];
                (i = '/' === e ? e + i : e + '/' + i), (this.cache[i] = !0);
              }
            return (this.cache[e] = t), n(null, t);
          }
        }),
        (E.prototype._readdirError = function (e, t, n) {
          if (!this.aborted) {
            // handle errors, and cache the information
            switch (t.code) {
              case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
              case 'ENOTDIR': // totally normal. means it *does* exist.
                var a = this._makeAbs(e);
                if (((this.cache[a] = 'FILE'), a === this.cwdAbs)) {
                  var i = new Error(t.code + ' invalid cwd ' + this.cwd);
                  (i.path = this.cwd),
                    (i.code = t.code),
                    this.emit('error', i),
                    this.abort();
                }
                break;
              case 'ENOENT': // not terribly unusual
              case 'ELOOP':
              case 'ENAMETOOLONG':
              case 'UNKNOWN':
                this.cache[this._makeAbs(e)] = !1;
                break;
              default: // some unusual error.  Treat as failure.
                (this.cache[this._makeAbs(e)] = !1),
                  this.strict &&
                    (this.emit('error', t),
                    // If the error is handled, then we abort
                    // if not, we threw out of here
                    this.abort()),
                  this.silent || console.error('glob error', t);
            }
            return n();
          }
        }),
        (E.prototype._processGlobStar = function (e, t, n, a, i, o, r) {
          var s = this;
          this._readdir(n, o, function (c, p) {
            s._processGlobStar2(e, t, n, a, i, o, p, r);
          });
        }),
        (E.prototype._processGlobStar2 = function (e, t, n, a, i, o, r, s) {
          //console.error('pgs2', prefix, remain[0], entries)
          // no entries means not a dir, so it can never have matches
          // foo.txt/** doesn't match foo.txt
          if (!r) return s();
          // test without the globstar, and with every child both below
          // and replacing the globstar.
          var c = a.slice(1),
            p = e ? [e] : [],
            u = p.concat(c);
          // the noGlobStar pattern exits the inGlobStar state
          this._process(u, i, !1, s);
          var l = this.symlinks[n],
            d = r.length;
          // If it's a symlink, and we're in a globstar, then stop
          if (l && o) return s();
          for (var m = 0; m < d; m++) {
            if ('.' !== r[m].charAt(0) || this.dot) {
              // these two cases enter the inGlobStar state
              var f = p.concat(r[m], c);
              this._process(f, i, !0, s);
              var h = p.concat(r[m], a);
              this._process(h, i, !0, s);
            }
          }
          s();
        }),
        (E.prototype._processSimple = function (e, t, n) {
          // XXX review this.  Shouldn't it be doing the mounting etc
          // before doing stat?  kinda weird?
          var a = this;
          this._stat(e, function (i, o) {
            a._processSimple2(e, t, i, o, n);
          });
        }),
        (E.prototype._processSimple2 = function (e, t, n, a, i) {
          // If it doesn't exist, then just mark the lack of results
          if (
            //console.error('ps2', prefix, exists)
            (this.matches[t] || (this.matches[t] = Object.create(null)), !a)
          )
            return i();
          if (e && u(e) && !this.nomount) {
            var o = /[\/\\]$/.test(e);
            '/' === e.charAt(0)
              ? (e = c.join(this.root, e))
              : ((e = c.resolve(this.root, e)), o && (e += '/'));
          }
          'win32' === process.platform && (e = e.replace(/\\/g, '/')),
            // Mark this as a match
            this._emitMatch(t, e),
            i();
        }),
        // Returns either 'DIR', 'FILE', or false
        (E.prototype._stat = function (e, t) {
          var n = this._makeAbs(e),
            i = '/' === e.slice(-1);
          if (e.length > this.maxLength) return t();
          if (!this.stat && f(this.cache, n)) {
            var o = this.cache[n];
            // It exists, but maybe not how we need it
            if ((Array.isArray(o) && (o = 'DIR'), !i || 'DIR' === o))
              return t(null, o);
            if (i && 'FILE' === o) return t();
            // otherwise we have to stat, because maybe c=true
            // if we know it exists, but not what it is.
          }
          var r = this.statCache[n];
          if (void 0 !== r) {
            if (!1 === r) return t(null, r);
            var s = r.isDirectory() ? 'DIR' : 'FILE';
            return i && 'FILE' === s ? t() : t(null, s, r);
          }
          var c = this,
            p = h('stat\0' + n, function (i, o) {
              if (o && o.isSymbolicLink())
                // If it's a symlink, then treat it as the target, unless
                // the target does not exist, then treat it as a file.
                return a.stat(n, function (a, i) {
                  a ? c._stat2(e, n, null, o, t) : c._stat2(e, n, a, i, t);
                });
              c._stat2(e, n, i, o, t);
            });
          p && a.lstat(n, p);
        }),
        (E.prototype._stat2 = function (e, t, n, a, i) {
          if (n && ('ENOENT' === n.code || 'ENOTDIR' === n.code))
            return (this.statCache[t] = !1), i();
          var o = '/' === e.slice(-1);
          if (
            ((this.statCache[t] = a),
            '/' === t.slice(-1) && a && !a.isDirectory())
          )
            return i(null, !1, a);
          var r = !0;
          return (
            a && (r = a.isDirectory() ? 'DIR' : 'FILE'),
            (this.cache[t] = this.cache[t] || r),
            o && 'FILE' === r ? i() : i(null, r, a)
          );
        });
      /***/
    },
    /* 53 */
    /***/ function (e, t, n) {
      (e.exports = u),
        (u.realpath = u),
        (u.sync = l),
        (u.realpathSync = l),
        (u.monkeypatch = function () {
          (a.realpath = u), (a.realpathSync = l);
        }),
        (u.unmonkeypatch = function () {
          (a.realpath = i), (a.realpathSync = o);
        });
      /***/
      var a = n(9),
        i = a.realpath,
        o = a.realpathSync,
        r = process.version,
        s = /^v[0-5]\./.test(r),
        c = n(141);
      function p(e) {
        return (
          e &&
          'realpath' === e.syscall &&
          ('ELOOP' === e.code ||
            'ENOMEM' === e.code ||
            'ENAMETOOLONG' === e.code)
        );
      }
      function u(e, t, n) {
        if (s) return i(e, t, n);
        'function' == typeof t && ((n = t), (t = null)),
          i(e, t, function (a, i) {
            p(a) ? c.realpath(e, t, n) : n(a, i);
          });
      }
      function l(e, t) {
        if (s) return o(e, t);
        try {
          return o(e, t);
        } catch (n) {
          if (p(n)) return c.realpathSync(e, t);
          throw n;
        }
      }
    },
    /* 54 */
    /***/ function (e, t, n) {
      function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.alphasort = p),
        (t.alphasorti = c),
        (t.setopts = function (e, t, n) {
          n || (n = {});
          // base-matching: just use globstar for that.
          if (n.matchBase && -1 === t.indexOf('/')) {
            if (n.noglobstar)
              throw new Error('base matching requires globstar');
            t = '**/' + t;
          }
          (e.silent = !!n.silent),
            (e.pattern = t),
            (e.strict = !1 !== n.strict),
            (e.realpath = !!n.realpath),
            (e.realpathCache = n.realpathCache || Object.create(null)),
            (e.follow = !!n.follow),
            (e.dot = !!n.dot),
            (e.mark = !!n.mark),
            (e.nodir = !!n.nodir),
            e.nodir && (e.mark = !0);
          (e.sync = !!n.sync),
            (e.nounique = !!n.nounique),
            (e.nonull = !!n.nonull),
            (e.nosort = !!n.nosort),
            (e.nocase = !!n.nocase),
            (e.stat = !!n.stat),
            (e.noprocess = !!n.noprocess),
            (e.absolute = !!n.absolute),
            (e.maxLength = n.maxLength || 1 / 0),
            (e.cache = n.cache || Object.create(null)),
            (e.statCache = n.statCache || Object.create(null)),
            (e.symlinks = n.symlinks || Object.create(null)),
            (function (e, t) {
              (e.ignore = t.ignore || []),
                Array.isArray(e.ignore) || (e.ignore = [e.ignore]);
              e.ignore.length && (e.ignore = e.ignore.map(u));
            })(
              // ignore patterns are always in dot:true mode.
              e,
              n,
            ),
            (e.changedCwd = !1);
          var o = process.cwd();
          a(n, 'cwd')
            ? ((e.cwd = i.resolve(n.cwd)), (e.changedCwd = e.cwd !== o))
            : (e.cwd = o);
          (e.root = n.root || i.resolve(e.cwd, '/')),
            (e.root = i.resolve(e.root)),
            'win32' === process.platform &&
              (e.root = e.root.replace(/\\/g, '/'));
          // TODO: is an absolute `cwd` supposed to be resolved against `root`?
          // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
          (e.cwdAbs = r(e.cwd) ? e.cwd : l(e, e.cwd)),
            'win32' === process.platform &&
              (e.cwdAbs = e.cwdAbs.replace(/\\/g, '/'));
          (e.nomount = !!n.nomount),
            // disable comments and negation in Minimatch.
            // Note that they are not supported in Glob itself anyway.
            (n.nonegate = !0),
            (n.nocomment = !0),
            (e.minimatch = new s(t, n)),
            (e.options = e.minimatch.options);
        }),
        (t.ownProp = a),
        (t.makeAbs = l),
        (t.finish = function (e) {
          for (
            var t = e.nounique,
              n = t ? [] : Object.create(null),
              a = 0,
              i = e.matches.length;
            a < i;
            a++
          ) {
            var o = e.matches[a];
            if (o && 0 !== Object.keys(o).length) {
              // had matches
              var r = Object.keys(o);
              t
                ? n.push.apply(n, r)
                : r.forEach(function (e) {
                    n[e] = !0;
                  });
            } else if (e.nonull) {
              // do like the shell, and spit out the literal glob
              var s = e.minimatch.globSet[a];
              t ? n.push(s) : (n[s] = !0);
            }
          }
          t || (n = Object.keys(n));
          e.nosort || (n = n.sort(e.nocase ? c : p));
          // at *some* point we statted all of these
          if (e.mark) {
            for (var a = 0; a < n.length; a++) n[a] = e._mark(n[a]);
            e.nodir &&
              (n = n.filter(function (t) {
                var n = !/\/$/.test(t),
                  a = e.cache[t] || e.cache[l(e, t)];
                return n && a && (n = 'DIR' !== a && !Array.isArray(a)), n;
              }));
          }
          e.ignore.length &&
            (n = n.filter(function (t) {
              return !d(e, t);
            }));
          e.found = n;
        }),
        (t.mark = function (e, t) {
          var n = l(e, t),
            a = e.cache[n],
            i = t;
          if (a) {
            var o = 'DIR' === a || Array.isArray(a),
              r = '/' === t.slice(-1);
            if (
              (o && !r ? (i += '/') : !o && r && (i = i.slice(0, -1)), i !== t)
            ) {
              var s = l(e, i);
              (e.statCache[s] = e.statCache[n]), (e.cache[s] = e.cache[n]);
            }
          }
          return i;
        }),
        // lotta situps...
        (t.isIgnored = d),
        (t.childrenIgnored = function (e, t) {
          return (
            !!e.ignore.length &&
            e.ignore.some(function (e) {
              return !(!e.gmatcher || !e.gmatcher.match(t));
            })
          );
        });
      /***/
      var i = n(8),
        o = n(29),
        r = n(30),
        s = o.Minimatch;
      function c(e, t) {
        return e.toLowerCase().localeCompare(t.toLowerCase());
      }
      function p(e, t) {
        return e.localeCompare(t);
      }
      function u(e) {
        var t = null;
        if ('/**' === e.slice(-3)) {
          var n = e.replace(/(\/\*\*)+$/, '');
          t = new s(n, { dot: !0 });
        }
        return { matcher: new s(e, { dot: !0 }), gmatcher: t };
      }
      function l(e, t) {
        var n = t;
        return (
          (n =
            '/' === t.charAt(0)
              ? i.join(e.root, t)
              : r(t) || '' === t
              ? t
              : e.changedCwd
              ? i.resolve(e.cwd, t)
              : i.resolve(t)),
          'win32' === process.platform && (n = n.replace(/\\/g, '/')),
          n
        );
      }
      // Return true, if pattern ends with globstar '**', for the accompanying parent directory.
      // Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
      function d(e, t) {
        return (
          !!e.ignore.length &&
          e.ignore.some(function (e) {
            return e.matcher.match(t) || !(!e.gmatcher || !e.gmatcher.match(t));
          })
        );
      }
    },
    /* 55 */
    /***/ function (e, t) {
      // Returns a wrapper function that returns a wrapped callback
      // The wrapper function should do some stuff, and return a
      // presumably different callback function.
      // This makes sure that own properties are retained, so that
      // decorations and such are not lost along the way.
      e.exports = function e(t, n) {
        if (t && n) return e(t)(n);
        if ('function' != typeof t)
          throw new TypeError('need wrapper function');
        Object.keys(t).forEach(function (e) {
          a[e] = t[e];
        });
        return a;
        function a() {
          for (var e = new Array(arguments.length), n = 0; n < e.length; n++)
            e[n] = arguments[n];
          var a = t.apply(this, e),
            i = e[e.length - 1];
          return (
            'function' == typeof a &&
              a !== i &&
              Object.keys(i).forEach(function (e) {
                a[e] = i[e];
              }),
            a
          );
        }
      };
      /***/
    },
    /* 56 */
    /***/ function (e, t, n) {
      var a = n(55);
      function i(e) {
        var t = function () {
          return t.called
            ? t.value
            : ((t.called = !0), (t.value = e.apply(this, arguments)));
        };
        return (t.called = !1), t;
      }
      function o(e) {
        var t = function () {
            if (t.called) throw new Error(t.onceError);
            return (t.called = !0), (t.value = e.apply(this, arguments));
          },
          n = e.name || 'Function wrapped with `once`';
        return (
          (t.onceError = n + " shouldn't be called more than once"),
          (t.called = !1),
          t
        );
      }
      /***/ (e.exports = a(i)),
        (e.exports.strict = a(o)),
        (i.proto = i(function () {
          Object.defineProperty(Function.prototype, 'once', {
            value: function () {
              return i(this);
            },
            configurable: !0,
          }),
            Object.defineProperty(Function.prototype, 'onceStrict', {
              value: function () {
                return o(this);
              },
              configurable: !0,
            });
        }));
    },
    /* 57 */
    /***/ function (e, t, n) {
      const a = n(58),
        i = n(120),
        o = n(121),
        r = n(122),
        s = n(123),
        c = n(15),
        p = n(25),
        u = n(11),
        l = n(124),
        d = n(126),
        m = n(128),
        f = n(129),
        h = n(130),
        v = n(131),
        x = n(132),
        g = n(133),
        b = n(0),
        y = n(16),
        E = n(134),
        _ = n(135),
        w = n(136),
        O = n(137),
        T = n(138),
        R = n(139),
        C = n(140),
        A = n(3),
        S = {
          Content: a,
          ContentGroup: i,
          ContentCategory: o,
          File: r,
          FileCategory: s,
          GeoPoint: c,
          GeoPolygon: p,
          Query: u,
          TableObject: l,
          User: d,
          UserGroup: m,
          UserSuperGroup: f,
          Order: h,
          TableSchema: v,
          RedPack: E,
          MobileTopUp: O,
          PeopleAlive: T,
          invokeFunction: g.invokeFunction,
          invoke: g.invoke,
          sendEmail: g.sendEmail,
          sendTemplateMessage: g.sendTemplateMessage,
          getOrderList: g.getOrderList,
          refund: g.refund,
          wxAccessToken: g.wxAccessToken,
          wxCensorImage: g.wxCensorImage,
          wxCensorText: g.wxCensorText,
          wxPromotionTransfer: g.wxPromotionTransfer,
          sendSmsCode: g.sendSmsCode,
          sendSmsMessage: g.sendSmsMessage,
          verifySmsCode: g.verifySmsCode,
          getWXACode: g.getWXACode,
          getTemplateMsgTicketCount: g.getTemplateMsgTicketCount,
          getInnerRequest: y.getInnerRequest,
          getOuterRequest: y.getOuterRequest,
          getAsyncJobResult: g.getAsyncJobResult,
          getServerDate: b.getServerDate,
          alipay: {
            sendTemplateMessage: g.sendAlipayTemplateMessage,
            getTemplateMsgTicketCount: g.getAlipayTemplateMsgTicketCount,
            getAlipayQRCode: g.getAlipayQRCode,
            profitSharing: {
              addReceiver: b.alipayProfitSharingAddReceiver,
              removeReceiver: b.alipayProfitSharingRemoveReceiver,
              receiverQuery: b.alipayProfitSharingReceiverQuery,
              Order: w,
            },
            censorText: g.alipayCensorText,
          },
          qq: {
            sendTemplateMessage: g.sendQQTemplateMessage,
            getTemplateMsgTicketCount: g.getQQTemplateMsgTicketCount,
            censorImage: g.qqCensorImage,
            censorText: g.qqCensorText,
            sendSubscribeMessage: g.sendQQSubscribeMessage,
            getSubscribeMsgTicketCount: g.getQQSubscribeMsgTicketCount,
          },
          baidu: {
            sendTemplateMessage: g.sendBaiduTemplateMessage,
            getTemplateMsgTicketCount: g.getBaiduTemplateMsgTicketCount,
          },
          wechat: {
            profitSharing: {
              addReceiver: b.wechatProfitSharingAddReceiver,
              removeReceiver: b.wechatProfitSharingRemoveReceiver,
              Order: _,
            },
            livestreaming: {
              getRoomList: b.getWechatLivestreamingRoomList,
              getPlaybackList: b.getWechatLivestreamingPlaybackList,
            },
            decryptData: g.wxDecryptData,
            sendSubscribeMessage: g.sendWechatSubscribeMessage,
            getSubscribeMsgTicketCount: g.getWxSubscribeMsgTicketCount,
            getUserRiskRank: g.getWxUserRiskRank,
            createActivityID: g.createWxActivityID,
            UrlScheme: R,
          },
          bytedance: {
            sendTemplateMessage: g.sendBytedanceTemplateMessage,
            getTemplateMsgTicketCount: g.getBytedanceTemplateMsgTicketCount,
            getQRCode: b.getBytedanceQRCode,
          },
          VERSION: A.getCurrentVersion(),
          useVersion: C,
          Validator: x,
        };
      Object.defineProperty(S, 'request', {
        get: function () {
          return y.getOuterRequest();
        },
      }),
        (e.exports = S);
    },
    /* 58 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(0),
        o = n(11),
        r = n(6),
        s = n(1),
        c = n(119),
        p = n(5),
        u = n(3);
      e.exports = class extends s {
        constructor(e) {
          super(),
            (this._groupID = e),
            (this._defaultQuery = new o()),
            this._defaultQuery.compare('group_id', '=', e),
            (this._queryObject = this._defaultQuery.queryObject);
        }
        get(e) {
          const t = new o();
          return (
            t.compare('id', '=', e),
            this.setQuery(t)
              .find()
              .then(e => {
                if (Array.isArray(e.data.objects) && e.data.objects.length)
                  return { error: {}, code: 0, data: e.data.objects[0] };
                throw new Error('404: Not Found');
              })
          );
        }
        create() {
          return new c(this._groupID);
        }
        getWithoutData(e) {
          return new c(this._groupID, e);
        }
        setQuery(e) {
          if (!(e instanceof o)) throw new p(605);
          {
            const t = o.and(this._defaultQuery, e);
            this._queryObject = r(t.queryObject);
          }
          return this;
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = u.getWithCountDefaultValue() } = {}) {
          let t = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            i.content.getContents(
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, t, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        delete(e) {
          return i.content.deleteContent(this._groupID, e);
        }
      };
    },
    /* 59 */
    /***/ function (e, t, n) {
      e.exports = n(60);
      /***/
    },
    /* 60 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2),
        i = n(31),
        o = n(62),
        r = n(17);
      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
      function s(e) {
        var t = new o(e),
          n = i(o.prototype.request, t);
        // Copy axios.prototype to instance
        return (
          a.extend(n, o.prototype, t),
          // Copy context to instance
          a.extend(n, t),
          n
        );
      }
      // Create the default instance to be exported
      var c = s(r);
      // Expose Axios class to allow class inheritance
      (c.Axios = o),
        // Factory for creating new instances
        (c.create = function (e) {
          return s(a.merge(r, e));
        }),
        // Expose Cancel & CancelToken
        (c.Cancel = n(39)),
        (c.CancelToken = n(89)),
        (c.isCancel = n(38)),
        // Expose all/spread
        (c.all = function (e) {
          return Promise.all(e);
        }),
        (c.spread = n(90)),
        (e.exports = c),
        // Allow use of default import syntax in TypeScript
        (e.exports.default = c);
    },
    /* 61 */
    /***/ function (e, t) {
      function n(e) {
        return (
          !!e.constructor &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      // For Node v0.10 support. Remove this eventually.
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      e.exports = function (e) {
        return (
          null != e &&
          (n(e) ||
            ('function' == typeof (t = e).readFloatLE &&
              'function' == typeof t.slice &&
              n(t.slice(0, 0))) ||
            !!e._isBuffer)
        );
        var t;
        /***/
      };
    },
    /* 62 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(17),
        i = n(2),
        o = n(84),
        r = n(85);
      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
      function s(e) {
        (this.defaults = e),
          (this.interceptors = { request: new o(), response: new o() });
      }
      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */ (s.prototype.request = function (e) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        'string' == typeof e &&
          (e = i.merge({ url: arguments[0] }, arguments[1])),
          ((e = i.merge(a, this.defaults, { method: 'get' }, e)).method =
            e.method.toLowerCase());
        // Hook up interceptors middleware
        var t = [r, void 0],
          n = Promise.resolve(e);
        for (
          this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected);
          }),
            this.interceptors.response.forEach(function (e) {
              t.push(e.fulfilled, e.rejected);
            });
          t.length;

        )
          n = n.then(t.shift(), t.shift());
        return n;
      }),
        // Provide aliases for supported request methods
        i.forEach(['delete', 'get', 'head', 'options'], function (e) {
          /*eslint func-names:0*/
          s.prototype[e] = function (t, n) {
            return this.request(i.merge(n || {}, { method: e, url: t }));
          };
        }),
        i.forEach(['post', 'put', 'patch'], function (e) {
          /*eslint func-names:0*/
          s.prototype[e] = function (t, n, a) {
            return this.request(
              i.merge(a || {}, { method: e, url: t, data: n }),
            );
          };
        }),
        (e.exports = s);
    },
    /* 63 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2);
      e.exports = function (e, t) {
        a.forEach(e, function (n, a) {
          a !== t &&
            a.toUpperCase() === t.toUpperCase() &&
            ((e[t] = n), delete e[a]);
        });
      };
    },
    /* 64 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2),
        i = n(32),
        o = n(34),
        r = n(65),
        s = n(66),
        c = n(18),
        p =
          ('undefined' != typeof window &&
            window.btoa &&
            window.btoa.bind(window)) ||
          n(67);
      e.exports = function (e) {
        return new Promise(function (t, u) {
          var l = e.data,
            d = e.headers;
          a.isFormData(l) && delete d['Content-Type'];
          var m = new XMLHttpRequest(),
            f = 'onreadystatechange',
            h = !1;
          // HTTP basic authentication
          if (
            // For IE 8/9 CORS support
            // Only supports POST and GET calls and doesn't returns the response headers.
            // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
            ('test' === process.env.NODE_ENV ||
              'undefined' == typeof window ||
              !window.XDomainRequest ||
              'withCredentials' in m ||
              s(e.url) ||
              ((m = new window.XDomainRequest()),
              (f = 'onload'),
              (h = !0),
              (m.onprogress = function () {}),
              (m.ontimeout = function () {})),
            e.auth)
          ) {
            var v = e.auth.username || '',
              x = e.auth.password || '';
            d.Authorization = 'Basic ' + p(v + ':' + x);
          }
          // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.
          if (
            (m.open(
              e.method.toUpperCase(),
              o(e.url, e.params, e.paramsSerializer),
              !0,
            ),
            // Set the request timeout in MS
            (m.timeout = e.timeout),
            // Listen for ready state
            (m[f] = function () {
              if (
                m &&
                (4 === m.readyState || h) &&
                (0 !== m.status ||
                  (m.responseURL && 0 === m.responseURL.indexOf('file:')))
              ) {
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                // Prepare the response
                var n =
                    'getAllResponseHeaders' in m
                      ? r(m.getAllResponseHeaders())
                      : null,
                  a = {
                    data:
                      e.responseType && 'text' !== e.responseType
                        ? m.response
                        : m.responseText,
                    // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
                    status: 1223 === m.status ? 204 : m.status,
                    statusText: 1223 === m.status ? 'No Content' : m.statusText,
                    headers: n,
                    config: e,
                    request: m,
                  };
                i(t, u, a),
                  // Clean up request
                  (m = null);
              }
            }),
            // Handle low level network errors
            (m.onerror = function () {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              u(c('Network Error', e, null, m)),
                // Clean up request
                (m = null);
            }),
            // Handle timeout
            (m.ontimeout = function () {
              u(
                c(
                  'timeout of ' + e.timeout + 'ms exceeded',
                  e,
                  'ECONNABORTED',
                  m,
                ),
              ),
                // Clean up request
                (m = null);
            }),
            a.isStandardBrowserEnv())
          ) {
            var g = n(68),
              b =
                (e.withCredentials || s(e.url)) && e.xsrfCookieName
                  ? g.read(e.xsrfCookieName)
                  : void 0;
            // Add xsrf header
            b && (d[e.xsrfHeaderName] = b);
          }
          // Add headers to the request
          // Add responseType to request if needed
          if (
            ('setRequestHeader' in m &&
              a.forEach(d, function (e, t) {
                void 0 === l && 'content-type' === t.toLowerCase()
                  ? // Remove Content-Type if data is undefined
                    delete d[t]
                  : // Otherwise add header to the request
                    m.setRequestHeader(t, e);
              }),
            // Add withCredentials to request if needed
            e.withCredentials && (m.withCredentials = !0),
            e.responseType)
          )
            try {
              m.responseType = e.responseType;
            } catch (t) {
              // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
              // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
              if ('json' !== e.responseType) throw t;
            }
          // Handle progress if needed
          'function' == typeof e.onDownloadProgress &&
            m.addEventListener('progress', e.onDownloadProgress),
            // Not all browsers support upload events
            'function' == typeof e.onUploadProgress &&
              m.upload &&
              m.upload.addEventListener('progress', e.onUploadProgress),
            e.cancelToken &&
              // Handle cancellation
              e.cancelToken.promise.then(function (e) {
                m &&
                  (m.abort(),
                  u(e),
                  // Clean up request
                  (m = null));
              }),
            void 0 === l && (l = null),
            // Send the request
            m.send(l);
        });
      };
    },
    /* 65 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2),
        i = [
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ];
      // Headers whose duplicates are ignored by node
      // c.f. https://nodejs.org/api/http.html#http_message_headers
      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */
      e.exports = function (e) {
        var t,
          n,
          o,
          r = {};
        return e
          ? (a.forEach(e.split('\n'), function (e) {
              if (
                ((o = e.indexOf(':')),
                (t = a.trim(e.substr(0, o)).toLowerCase()),
                (n = a.trim(e.substr(o + 1))),
                t)
              ) {
                if (r[t] && i.indexOf(t) >= 0) return;
                r[t] =
                  'set-cookie' === t
                    ? (r[t] ? r[t] : []).concat([n])
                    : r[t]
                    ? r[t] + ', ' + n
                    : n;
              }
            }),
            r)
          : r;
      };
    },
    /* 66 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2);
      e.exports = a.isStandardBrowserEnv()
        ? // Standard browser envs have full support of the APIs needed to test
          // whether the request URL is of the same origin as current location.
          (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a');
            /**
             * Parse a URL to discover it's components
             *
             * @param {String} url The URL to be parsed
             * @returns {Object}
             */
            function i(e) {
              var a = e;
              // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
              return (
                t &&
                  // IE needs attribute set twice to normalize properties
                  (n.setAttribute('href', a), (a = n.href)),
                n.setAttribute('href', a),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, '') : '',
                  hash: n.hash ? n.hash.replace(/^#/, '') : '',
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    '/' === n.pathname.charAt(0)
                      ? n.pathname
                      : '/' + n.pathname,
                }
              );
            }
            /**
             * Determine if a URL shares the same origin as the current location
             *
             * @param {String} requestURL The URL to test
             * @returns {boolean} True if URL shares the same origin, otherwise false
             */
            return (
              (e = i(window.location.href)),
              function (t) {
                var n = a.isString(t) ? i(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    /* 67 */
    /***/ function (e, t, n) {
      'use strict';
      // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
      var a =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      function i() {
        this.message = 'String contains an invalid character';
      }
      (i.prototype = new Error()),
        (i.prototype.code = 5),
        (i.prototype.name = 'InvalidCharacterError'),
        (e.exports = function (e) {
          for (
            var t, n, o = String(e), r = '', s = 0, c = a;
            // if the next str index does not exist:
            //   change the mapping table to "="
            //   check if d has no fractional digits
            o.charAt(0 | s) || ((c = '='), s % 1);
            // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
            r += c.charAt(63 & (t >> (8 - (s % 1) * 8)))
          ) {
            if ((n = o.charCodeAt((s += 0.75))) > 255) throw new i();
            t = (t << 8) | n;
          }
          return r;
        });
    },
    /* 68 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2);
      e.exports = a.isStandardBrowserEnv()
        ? {
            write: function (e, t, n, i, o, r) {
              var s = [];
              s.push(e + '=' + encodeURIComponent(t)),
                a.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
                a.isString(i) && s.push('path=' + i),
                a.isString(o) && s.push('domain=' + o),
                !0 === r && s.push('secure'),
                (document.cookie = s.join('; '));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, '', Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    /* 69 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2),
        i = n(32),
        o = n(34),
        r = n(19),
        s = n(10),
        c = n(35).http,
        p = n(35).https,
        u = n(7),
        l = n(77),
        d = n(78),
        m = n(18),
        f = n(33),
        h = n(79);
      /*eslint consistent-return:0*/
      e.exports = function (e) {
        return new Promise(function (t, n) {
          var v,
            x = e.data,
            g = e.headers;
          if (
            // Set User-Agent (required by some servers)
            // Only set header if it hasn't been set in config
            // See https://github.com/axios/axios/issues/69
            (g['User-Agent'] ||
              g['user-agent'] ||
              (g['User-Agent'] = 'axios/' + d.version),
            x && !a.isStream(x))
          ) {
            if (Buffer.isBuffer(x));
            else if (a.isArrayBuffer(x)) x = new Buffer(new Uint8Array(x));
            else {
              if (!a.isString(x))
                return n(
                  m(
                    'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                    e,
                  ),
                );
              // Add Content-Length header if data exists
              x = new Buffer(x, 'utf-8');
            }
            g['Content-Length'] = x.length;
          }
          // HTTP basic authentication
          var b = void 0;
          e.auth &&
            (b = (e.auth.username || '') + ':' + (e.auth.password || ''));
          // Parse url
          var y = u.parse(e.url),
            E = y.protocol || 'http:';
          if (!b && y.auth) {
            var _ = y.auth.split(':');
            b = (_[0] || '') + ':' + (_[1] || '');
          }
          b && delete g.Authorization;
          var w = 'https:' === E,
            O = w ? e.httpsAgent : e.httpAgent;
          !O &&
            e.proxy &&
            w &&
            (O = e.proxy.auth
              ? new h(
                  'http://' +
                    e.proxy.auth.username +
                    ':' +
                    e.proxy.auth.password +
                    '@' +
                    e.proxy.host +
                    ':' +
                    e.proxy.port,
                )
              : new h('http://' + e.proxy.host + ':' + e.proxy.port));
          var T,
            R = {
              hostname: y.hostname,
              port: y.port,
              path: o(y.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
              method: e.method,
              headers: g,
              agent: O,
              auth: b,
            },
            C = e.proxy;
          if (!C && !1 !== C) {
            var A = E.slice(0, -1) + '_proxy',
              S = process.env[A] || process.env[A.toUpperCase()];
            if (S) {
              var k = u.parse(S);
              if (((C = { host: k.hostname, port: k.port }), k.auth)) {
                var I = k.auth.split(':');
                C.auth = { username: I[0], password: I[1] };
              }
            }
          }
          if (
            C &&
            O instanceof h == !1 &&
            ((R.hostname = C.host),
            (R.host = C.host),
            (R.headers.host = y.hostname + (y.port ? ':' + y.port : '')),
            (R.port = C.port),
            (R.path =
              E + '//' + y.hostname + (y.port ? ':' + y.port : '') + R.path),
            C.auth)
          ) {
            var j = new Buffer(
              C.auth.username + ':' + C.auth.password,
              'utf8',
            ).toString('base64');
            R.headers['Proxy-Authorization'] = 'Basic ' + j;
          }
          e.transport
            ? (T = e.transport)
            : 0 === e.maxRedirects
            ? (T = w ? s : r)
            : (e.maxRedirects && (R.maxRedirects = e.maxRedirects),
              (T = w ? p : c));
          // Create the request
          var P = T.request(R, function (a) {
            if (!P.aborted) {
              // Response has been received so kill timer that handles request timeout
              clearTimeout(v), (v = null);
              // uncompress the response body transparently if required
              var o = a;
              switch (a.headers['content-encoding']) {
                /*eslint default-case:0*/
                case 'gzip':
                case 'compress':
                case 'deflate':
                  // add the unzipper to the body stream processing pipeline
                  (o = o.pipe(l.createUnzip())),
                    // remove the content-encoding in order to not confuse downstream operations
                    delete a.headers['content-encoding'];
              }
              // return the last request in case of redirects
              var r = a.req || P,
                s = {
                  status: a.statusCode,
                  statusText: a.statusMessage,
                  headers: a.headers,
                  config: e,
                  request: r,
                };
              if ('stream' === e.responseType) (s.data = o), i(t, n, s);
              else {
                var c = [];
                o.on('data', function (t) {
                  c.push(t),
                    // make sure the content length is not over the maxContentLength if specified
                    e.maxContentLength > -1 &&
                      Buffer.concat(c).length > e.maxContentLength &&
                      n(
                        m(
                          'maxContentLength size of ' +
                            e.maxContentLength +
                            ' exceeded',
                          e,
                          null,
                          r,
                        ),
                      );
                }),
                  o.on('error', function (t) {
                    P.aborted || n(f(t, e, null, r));
                  }),
                  o.on('end', function () {
                    var a = Buffer.concat(c);
                    'arraybuffer' !== e.responseType &&
                      (a = a.toString('utf8')),
                      (s.data = a),
                      i(t, n, s);
                  });
              }
            }
          });
          // Handle errors
          P.on('error', function (t) {
            P.aborted || n(f(t, e, null, P));
          }),
            // Handle request timeout
            e.timeout &&
              !v &&
              (v = setTimeout(function () {
                P.abort(),
                  n(
                    m(
                      'timeout of ' + e.timeout + 'ms exceeded',
                      e,
                      'ECONNABORTED',
                      P,
                    ),
                  );
              }, e.timeout)),
            e.cancelToken &&
              // Handle cancellation
              e.cancelToken.promise.then(function (e) {
                P.aborted || (P.abort(), n(e));
              }),
            // Send the request
            a.isStream(x) ? x.pipe(P) : P.end(x);
        });
      };
    },
    /* 70 */
    /***/ function (e, t, n) {
      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */
      function a() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
        return (
          !e &&
            'undefined' != typeof process &&
            'env' in process &&
            (e = process.env.DEBUG),
          e
        );
      }
      /**
       * Enable namespaces listed in `localStorage.debug` initially.
       */ (/**
       * This is the web browser implementation of `debug()`.
       *
       * Expose `debug()` as the module.
       */
      (t = e.exports = n(36)).log =
        /**
         * Invokes `console.log()` when available.
         * No-op when `console.log` is not a "function".
         *
         * @api public
         */
        function () {
          // this hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return (
            'object' == typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }),
        /**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */ (t.formatArgs =
          /**
           * Colorize log arguments if enabled.
           *
           * @api public
           */
          function (e) {
            var n = this.useColors;
            if (
              ((e[0] =
                (n ? '%c' : '') +
                this.namespace +
                (n ? ' %c' : ' ') +
                e[0] +
                (n ? '%c ' : ' ') +
                '+' +
                t.humanize(this.diff)),
              !n)
            )
              return;
            var a = 'color: ' + this.color;
            e.splice(1, 0, a, 'color: inherit');
            // the final "%c" is somewhat tricky, because there could be other
            // arguments passed either before or after the %c, so we need to
            // figure out the correct index to insert the CSS into
            var i = 0,
              o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (e) {
              '%%' !== e &&
                '%c' === e &&
                // we only are interested in the *last* %c
                // (the user may have provided their own)
                (o = ++i);
            }),
              e.splice(o, 0, a);
          }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem('debug') : (t.storage.debug = e);
          } catch (e) {}
        }),
        (t.load = a),
        (t.useColors =
          /**
           * Currently only WebKit-based Web Inspectors, Firefox >= v31,
           * and the Firebug extension (any Firefox version) are known
           * to support "%c" CSS customizations.
           *
           * TODO: add a `localStorage` variable to explicitly enable/disable colors
           */
          function () {
            // NB: In an Electron preload script, document will be defined but not fully
            // initialized. Since we know we're in Chrome, we'll just detect this case
            // explicitly
            if (
              'undefined' != typeof window &&
              window.process &&
              'renderer' === window.process.type
            )
              return !0;
            // Internet Explorer and Edge do not support colors.
            if (
              'undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            )
              return !1;
            // is webkit? http://stackoverflow.com/a/16459606/376773
            // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
            return (
              ('undefined' != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              // is firebug? http://stackoverflow.com/a/398120/376773
              ('undefined' != typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              // is firefox >= v31?
              // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
              ('undefined' != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              // double check webkit in userAgent just in case we are in a worker
              ('undefined' != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
        /**
         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
         */ (t.storage =
          'undefined' != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : /**
               * Localstorage attempts to return the localstorage.
               *
               * This is necessary because safari throws
               * when a user disables cookies/localstorage
               * and you attempt to access it.
               *
               * @return {LocalStorage}
               * @api private
               */
              (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
              /***/
        /**
         * Colors.
         */
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message;
          }
        }),
        t.enable(a());
    },
    /* 71 */
    /***/ function (e, t) {
      /**
       * Helpers.
       */
      var n = 1e3,
        a = 60 * n,
        i = 60 * a,
        o = 24 * i,
        r = 365.25 * o;
      /**
       * Pluralization helper.
       */
      function s(e, t, n) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + ' ' + n
            : Math.ceil(e / t) + ' ' + n + 's';
      }
      /***/
      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */
      e.exports = function (e, t) {
        t = t || {};
        var c,
          p = typeof e;
        if ('string' === p && e.length > 0)
          /**
           * Parse the given `str` and return milliseconds.
           *
           * @param {String} str
           * @return {Number}
           * @api private
           */
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var t =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                e,
              );
            if (!t) return;
            var s = parseFloat(t[1]);
            switch ((t[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return s * r;
              case 'days':
              case 'day':
              case 'd':
                return s * o;
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return s * i;
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return s * a;
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return s * n;
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return s;
              default:
                return;
            }
          })(
            /**
             * Short format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */ e,
          );
        if ('number' === p && !1 === isNaN(e))
          return t.long
            ? s((c = e), o, 'day') ||
                s(c, i, 'hour') ||
                s(c, a, 'minute') ||
                s(c, n, 'second') ||
                c + ' ms'
            : (function (e) {
                if (e >= o) return Math.round(e / o) + 'd';
                if (e >= i) return Math.round(e / i) + 'h';
                if (e >= a) return Math.round(e / a) + 'm';
                if (e >= n) return Math.round(e / n) + 's';
                return e + 'ms';
              })(
                /**
                 * Long format for `ms`.
                 *
                 * @param {Number} ms
                 * @return {String}
                 * @api private
                 */ e,
              );
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(e),
        );
      };
    },
    /* 72 */
    /***/ function (e, t, n) {
      /**
       * Module dependencies.
       */
      var a = n(73),
        i = n(4);
      (/**
       * This is the Node.js implementation of `debug()`.
       *
       * Expose `debug()` as the module.
       */
      (t = e.exports = n(36)).init =
        /**
         * Init logic for `debug` instances.
         *
         * Create a new `inspectOpts` object in case `useColors` is set
         * differently for a particular `debug` instance.
         */
        function (e) {
          e.inspectOpts = {};
          for (var n = Object.keys(t.inspectOpts), a = 0; a < n.length; a++)
            e.inspectOpts[n[a]] = t.inspectOpts[n[a]];
        }),
        /**
         * Enable namespaces listed in `process.env.DEBUG` initially.
         */ (t.log =
          /**
           * Invokes `util.format()` with the specified arguments and writes to stderr.
           */
          function () {
            return process.stderr.write(i.format.apply(i, arguments) + '\n');
          }),
        /**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */ (t.formatArgs =
          /**
           * Adds ANSI color escape codes if enabled.
           *
           * @api public
           */
          function (e) {
            var n = this.namespace;
            if (this.useColors) {
              var a = this.color,
                i = '[3' + (a < 8 ? a : '8;5;' + a),
                o = '  ' + i + ';1m' + n + ' [0m';
              (e[0] = o + e[0].split('\n').join('\n' + o)),
                e.push(i + 'm+' + t.humanize(this.diff) + '[0m');
            } else
              e[0] =
                (t.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ') +
                n +
                ' ' +
                e[0];
          }),
        (t.save = function (e) {
          null == e
            ? // If you set a process.env field to null or undefined, it gets cast to the
              // string 'null' or 'undefined'. Just delete instead.
              delete process.env.DEBUG
            : (process.env.DEBUG = e);
        }),
        /**
         * Load `namespaces`.
         *
         * @return {String} returns the previously persisted debug modes
         * @api private
         */ (t.load = r),
        (t.useColors =
          /**
           * Is stdout a TTY? Colored output is enabled when `true`.
           */
          function () {
            return 'colors' in t.inspectOpts
              ? Boolean(t.inspectOpts.colors)
              : a.isatty(process.stderr.fd);
          }),
        /**
         * Map %o to `util.inspect()`, all on a single line.
         */ /**
         * Colors.
         */
        (t.colors = [6, 2, 3, 4, 5, 1]);
      try {
        var o = n(74);
        o &&
          o.level >= 2 &&
          (t.colors = [
            20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
            63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
            113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196,
            197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
            214, 215, 220, 221,
          ]);
      } catch (e) {
        // swallow - we only care if `supports-color` is available; it doesn't have to be.
      }
      /**
       * Build up the default `inspectOpts` object from the environment variables.
       *
       *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
       */ function r() {
        return process.env.DEBUG;
      }
      (t.inspectOpts = Object.keys(process.env)
        .filter(function (e) {
          return /^debug_/i.test(e);
        })
        .reduce(function (e, t) {
          // camel-case
          var n = t
              .substring(6)
              .toLowerCase()
              .replace(/_([a-z])/g, function (e, t) {
                return t.toUpperCase();
              }),
            a = process.env[t];
          // coerce string value into JS value
          return (
            (a =
              !!/^(yes|on|true|enabled)$/i.test(a) ||
              (!/^(no|off|false|disabled)$/i.test(a) &&
                ('null' === a ? null : Number(a)))),
            (e[n] = a),
            e
          );
        }, {})),
        (t.formatters.o = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            i
              .inspect(e, this.inspectOpts)
              .split('\n')
              .map(function (e) {
                return e.trim();
              })
              .join(' ')
          );
        }),
        /**
         * Map %o to `util.inspect()`, allowing multiple lines if needed.
         */
        (t.formatters.O = function (e) {
          return (
            (this.inspectOpts.colors = this.useColors),
            i.inspect(e, this.inspectOpts)
          );
        }),
        t.enable(r());
    },
    /* 73 */
    /***/ function (e, t) {
      e.exports = require('tty');
      /***/
    },
    /* 74 */
    /***/ function (e, t, n) {
      'use strict';
      const a = n(75),
        i = n(76),
        o = process.env;
      let r = (() => {
        if (i('no-color') || i('no-colors') || i('color=false')) return 0;
        if (i('color=16m') || i('color=full') || i('color=truecolor')) return 3;
        if (i('color=256')) return 2;
        if (i('color') || i('colors') || i('color=true') || i('color=always'))
          return 1;
        if (process.stdout && !process.stdout.isTTY) return 0;
        if ('win32' === process.platform) {
          // Node.js 7.5.0 is the first version of Node.js to include a patch to
          // libuv that enables 256 color output on Windows. Anything earlier and it
          // won't work. However, here we target Node.js 8 at minimum as it is an LTS
          // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
          // release that supports 256 colors.
          const e = a.release().split('.');
          return Number(process.versions.node.split('.')[0]) >= 8 &&
            Number(e[0]) >= 10 &&
            Number(e[2]) >= 10586
            ? 2
            : 1;
        }
        if ('CI' in o)
          return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(
            e => e in o,
          ) || 'codeship' === o.CI_NAME
            ? 1
            : 0;
        if ('TEAMCITY_VERSION' in o)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION)
            ? 1
            : 0;
        if ('TERM_PROGRAM' in o) {
          const e = parseInt((o.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
          switch (o.TERM_PROGRAM) {
            case 'iTerm.app':
              return e >= 3 ? 3 : 2;
            case 'Hyper':
              return 3;
            case 'Apple_Terminal':
              return 2;
            // No default
          }
        }
        return /-256(color)?$/i.test(o.TERM)
          ? 2
          : /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM)
          ? 1
          : 'COLORTERM' in o
          ? 1
          : (o.TERM, 0);
      })();
      'FORCE_COLOR' in o &&
        (r = 0 === parseInt(o.FORCE_COLOR, 10) ? 0 : r || 1),
        (e.exports =
          process &&
          (e =>
            0 !== e && {
              level: e,
              hasBasic: !0,
              has256: e >= 2,
              has16m: e >= 3,
            })(r));
    },
    /* 75 */
    /***/ function (e, t) {
      e.exports = require('os');
      /***/
    },
    /* 76 */
    /***/ function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        var n = (t = t || process.argv).indexOf('--'),
          a = /^-{1,2}/.test(e) ? '' : '--',
          i = t.indexOf(a + e);
        return -1 !== i && (-1 === n || i < n);
      };
    },
    /* 77 */
    /***/ function (e, t) {
      e.exports = require('zlib');
      /***/
    },
    /* 78 */
    /***/ function (e, t) {
      e.exports = {
        name: 'axios-https-proxy-fix',
        version: '0.17.1',
        description: 'Promise based HTTP client for the browser and node.js',
        main: 'index.js',
        scripts: {
          test: 'grunt test && bundlesize',
          start: 'node ./sandbox/server.js',
          build: 'NODE_ENV=production grunt build',
          preversion: 'npm test',
          version:
            'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json',
          postversion: 'git push && git push --tags',
          examples: 'node ./examples/server.js',
          coveralls:
            'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
        },
        repository: { type: 'git', url: 'https://github.com/Sitronik/axios' },
        keywords: ['xhr', 'http', 'ajax', 'promise', 'node'],
        author: 'Sitronik',
        license: 'MIT',
        bugs: { url: 'https://github.com/Sitronik/axios/issues' },
        homepage: 'https://github.com/Sitronik/axios',
        devDependencies: {
          bundlesize: '^0.5.7',
          coveralls: '^2.11.9',
          'es6-promise': '^4.0.5',
          grunt: '^1.0.1',
          'grunt-banner': '^0.6.0',
          'grunt-cli': '^1.2.0',
          'grunt-contrib-clean': '^1.0.0',
          'grunt-contrib-nodeunit': '^1.0.0',
          'grunt-contrib-watch': '^1.0.0',
          'grunt-eslint': '^19.0.0',
          'grunt-karma': '^2.0.0',
          'grunt-ts': '^6.0.0-beta.3',
          'grunt-webpack': '^1.0.18',
          'istanbul-instrumenter-loader': '^1.0.0',
          'jasmine-core': '^2.4.1',
          karma: '^1.3.0',
          'karma-chrome-launcher': '^2.0.0',
          'karma-coverage': '^1.0.0',
          'karma-firefox-launcher': '^1.0.0',
          'karma-jasmine': '^1.0.2',
          'karma-jasmine-ajax': '^0.1.13',
          'karma-opera-launcher': '^1.0.0',
          'karma-phantomjs-launcher': '^1.0.0',
          'karma-safari-launcher': '^1.0.0',
          'karma-sauce-launcher': '^1.1.0',
          'karma-sinon': '^1.0.5',
          'karma-sourcemap-loader': '^0.3.7',
          'karma-webpack': '^1.7.0',
          'load-grunt-tasks': '^3.5.2',
          minimist: '^1.2.0',
          'phantomjs-prebuilt': '^2.1.7',
          sinon: '^1.17.4',
          webpack: '^1.13.1',
          'webpack-dev-server': '^1.14.1',
          'url-search-params': '^0.6.1',
          typescript: '^2.0.3',
        },
        browser: { './lib/adapters/http.js': './lib/adapters/xhr.js' },
        typings: './index.d.ts',
        dependencies: {
          'follow-redirects': '^1.2.5',
          'is-buffer': '^1.1.5',
          'https-proxy-agent': '^2.1.1',
        },
        bundlesize: [{ path: './dist/axios.min.js', threshold: '5kB' }],
      };
      /***/
    },
    /* 79 */
    /***/ function (e, t, n) {
      /**
       * Module dependencies.
       */
      var a = n(22),
        i = n(23),
        o = n(7),
        r = n(80),
        s = n(4).inherits,
        c = n(14)('https-proxy-agent');
      /**
       * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to the
       * specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
       *
       * @api public
       */
      function p(e) {
        if (!(this instanceof p)) return new p(e);
        if (('string' == typeof e && (e = o.parse(e)), !e))
          throw new Error(
            'an HTTP(S) proxy server `host` and `port` must be specified!',
          );
        c('creating new HttpsProxyAgent instance: %o', e), r.call(this, e);
        var t = Object.assign({}, e);
        // if `true`, then connect to the proxy server over TLS. defaults to `false`.
        (this.secureProxy = !!t.protocol && /^https:?$/i.test(t.protocol)),
          // prefer `hostname` over `host`, and set the `port` if needed
          (t.host = t.hostname || t.host),
          (t.port = +t.port || (this.secureProxy ? 443 : 80)),
          // ALPN is supported by Node.js >= v5.
          // attempt to negotiate http/1.1 for proxy servers that support http/2
          !this.secureProxy ||
            'ALPNProtocols' in t ||
            (t.ALPNProtocols = ['http 1.1']),
          t.host &&
            t.path &&
            // if both a `host` and `path` are specified then it's most likely the
            // result of a `url.parse()` call... we need to remove the `path` portion so
            // that `net.connect()` doesn't attempt to open that as a unix socket file.
            (delete t.path, delete t.pathname),
          (this.proxy = t);
      }
      /**
       * Module exports.
       */
      (e.exports = p),
        s(p, r),
        /**
         * Called when the node-core HTTP client library is creating a new HTTP request.
         *
         * @api public
         */
        (p.prototype.callback = function (e, t, n) {
          var o,
            r = this.proxy,
            s = [],
            p = 0;
          // create a socket connection to the proxy server
          function u() {
            var e = o.read();
            e ? h(e) : o.once('readable', u);
          }
          function l() {
            o.removeListener('data', h),
              o.removeListener('end', m),
              o.removeListener('error', f),
              o.removeListener('close', d),
              o.removeListener('readable', u);
          }
          function d(e) {
            c('onclose had error %o', e);
          }
          function m() {
            c('onend');
          }
          function f(e) {
            l(), n(e);
          }
          function h(a) {
            s.push(a), (p += a.length);
            var r = Buffer.concat(s, p),
              d = r.toString('ascii');
            if (!~d.indexOf('\r\n\r\n'))
              // keep buffering
              return (
                c('have not received end of HTTP headers yet...'),
                void (o.read ? u() : o.once('data', h))
              );
            var m = d.substring(0, d.indexOf('\r\n')),
              f = +m.split(' ')[1];
            if ((c('got proxy server response: %o', m), 200 == f)) {
              // 200 Connected status code!
              var x = o;
              // nullify the buffered data since we won't be needing it
              (s = r = null),
                t.secureEndpoint &&
                  // since the proxy is connecting to an SSL server, we have
                  // to upgrade this socket connection to an SSL connection
                  (c(
                    'upgrading proxy-connected socket to TLS connection: %o',
                    t.host,
                  ),
                  (t.socket = o),
                  (t.servername = t.servername || t.host),
                  (t.host = null),
                  (t.hostname = null),
                  (t.port = null),
                  (x = i.connect(t))),
                l(),
                n(null, x);
            }
            // some other status code that's not 200... need to re-play the HTTP header
            // "data" events onto the socket once the HTTP machinery is attached so that
            // the user can parse and handle the error status code
            else
              l(),
                // save a reference to the concat'd Buffer for the `onsocket` callback
                (s = r),
                // need to wait for the "socket" event to re-play the "data" events
                e.once('socket', v),
                n(null, o);
          }
          function v(e) {
            // replay the "buffers" Buffer onto the `socket`, since at this point
            // the HTTP module machinery has been hooked up for the user
            if ('function' == typeof e.ondata)
              // node <= v0.11.3, the `ondata` function is set on the socket
              e.ondata(s, 0, s.length);
            else {
              if (!(e.listeners('data').length > 0))
                // never?
                throw new Error('should not happen...');
              // nullify the cached Buffer instance
              // node > v0.11.3, the "data" event is listened for directly
              e.emit('data', s);
            }
            s = null;
          }
          (o = this.secureProxy ? i.connect(r) : a.connect(r)).on('error', f),
            o.on('close', d),
            o.on('end', m),
            o.read ? u() : o.once('data', h);
          var x = 'CONNECT ' + (t.host + ':' + t.port) + ' HTTP/1.1\r\n',
            g = Object.assign({}, r.headers);
          r.auth &&
            (g['Proxy-Authorization'] =
              'Basic ' + Buffer.from(r.auth).toString('base64'));
          // the Host header should only include the port
          // number when it is a non-standard port
          var b,
            y,
            E = t.host;
          (b = t.port),
            (y = t.secureEndpoint),
            Boolean((!y && 80 === b) || (y && 443 === b)) ||
              (E += ':' + t.port),
            (g.Host = E),
            (g.Connection = 'close'),
            Object.keys(g).forEach(function (e) {
              x += e + ': ' + g[e] + '\r\n';
            }),
            o.write(x + '\r\n');
        });
    },
    /* 80 */
    /***/ function (e, t, n) {
      'use strict';
      n(81);
      const a = n(4).inherits,
        i = n(37),
        o = n(24).EventEmitter;
      /**
       * Base `http.Agent` implementation.
       * No pooling/keep-alive is implemented by default.
       *
       * @param {Function} callback
       * @api public
       */
      function r(e, t) {
        if (!(this instanceof r)) return new r(e, t);
        o.call(this),
          // The callback gets promisified if it has 3 parameters
          // (i.e. it has a callback function) lazily
          (this._promisifiedCallback = !1);
        let n = t;
        'function' == typeof e ? (this.callback = e) : e && (n = e),
          // timeout for the socket to be returned from the callback
          (this.timeout = (n && n.timeout) || null),
          (this.options = n);
      }
      (e.exports = r),
        a(r, o),
        /**
         * Override this function in your subclass!
         */
        (r.prototype.callback = function (e, t) {
          throw new Error(
            '"agent-base" has no default implementation, you must subclass and override `callback()`',
          );
        }),
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        (r.prototype.addRequest = function (e, t) {
          const n = Object.assign({}, t);
          // Set default `host` for HTTP to localhost
          null == n.host && (n.host = 'localhost'),
            // Set default `port` for HTTP if none was explicitly specified
            null == n.port && (n.port = n.secureEndpoint ? 443 : 80);
          const a = Object.assign({}, this.options, n);
          // Create the `stream.Duplex` instance
          let o;
          a.host &&
            a.path &&
            // If both a `host` and `path` are specified then it's most likely the
            // result of a `url.parse()` call... we need to remove the `path` portion so
            // that `net.connect()` doesn't attempt to open that as a unix socket file.
            delete a.path,
            delete a.agent,
            delete a.hostname,
            delete a._defaultAgent,
            delete a.defaultPort,
            delete a.createConnection,
            // Hint to use "Connection: close"
            // XXX: non-documented `http` module API :(
            (e._last = !0),
            (e.shouldKeepAlive = !1);
          let r = !1;
          const s = this.timeout;
          function c(t) {
            e._hadError ||
              (e.emit('error', t),
              // For Safety. Some additional errors might fire later on
              // and we need to make sure we don't double-fire the error event.
              (e._hadError = !0));
          }
          function p(e) {
            r || (null != o && (clearTimeout(o), (o = null)), c(e));
          }
          !this._promisifiedCallback &&
            this.callback.length >= 3 &&
            // Legacy callback function - convert to a Promise
            ((this.callback = i(this.callback, this)),
            (this._promisifiedCallback = !0)),
            s > 0 &&
              (o = setTimeout(function () {
                (o = null), (r = !0);
                const e = new Error(
                  'A "socket" was not created for HTTP request before ' +
                    s +
                    'ms',
                );
                (e.code = 'ETIMEOUT'), c(e);
              }, s));
          try {
            Promise.resolve(this.callback(e, a)).then(function (t) {
              var n;
              r ||
                (null != o && (clearTimeout(o), (o = null)),
                (n = t) && 'function' == typeof n.addRequest
                  ? // `socket` is actually an http.Agent instance, so relinquish
                    // responsibility for this `req` to the Agent from here on
                    t.addRequest(e, a)
                  : t
                  ? e.onSocket(t)
                  : c(
                      new Error(
                        `no Duplex stream was returned to agent-base for \`${e.method} ${e.path}\``,
                      ),
                    ));
            }, p);
          } catch (e) {
            Promise.reject(e).catch(p);
          }
        });
    },
    /* 81 */
    /***/ function (e, t, n) {
      'use strict';
      const a = n(7),
        i = n(10);
      var o;
      /**
       * This currently needs to be applied to all Node.js versions
       * in order to determine if the `req` is an HTTP or HTTPS request.
       *
       * There is currently no PR attempting to move this property upstream.
       */
      (i.request =
        ((o = i.request),
        function (e, t) {
          let n;
          return (
            null ==
              (n = 'string' == typeof e ? a.parse(e) : Object.assign({}, e))
                .port && (n.port = 443),
            (n.secureEndpoint = !0),
            o.call(i, n, t)
          );
        })),
        /**
         * This is needed for Node.js >= 9.0.0 to make sure `https.get()` uses the
         * patched `https.request()`.
         *
         * Ref: https://github.com/nodejs/node/commit/5118f31
         */
        (i.get = function (e, t) {
          const n = i.request(e, t);
          return n.end(), n;
        });
    },
    /* 82 */
    /***/ function (e, t, n) {
      'use strict';
      /* global self, window, module, global, require */ e.exports =
        (function () {
          var e = void 0;
          // Export the native Promise implementation if it
          // looks like it matches the spec
          // Seek the global object
          return (
            (e =
              void 0 !== global
                ? global
                : void 0 !== window && window.document
                ? window
                : self),
            (function () {
              // No promise object at all, and it's a non-starter
              if (!e.hasOwnProperty('Promise')) return !1;
              // There is a Promise object. Does it conform to the spec?
              var t,
                n = e.Promise;
              // Some of these methods are missing from
              // Firefox/Chrome experimental implementations
              return (
                !(
                  !n.hasOwnProperty('resolve') || !n.hasOwnProperty('reject')
                ) &&
                !(!n.hasOwnProperty('all') || !n.hasOwnProperty('race')) &&
                ((t = void 0),
                !!new e.Promise(function (e) {
                  t = e;
                }) && 'function' == typeof t)
              );
            })()
              ? e.Promise
              : n(83).Promise
          );
          //  Otherwise, return the es6-promise polyfill by @jaffathecake.
        })();
    },
    /* 83 */
    /***/ function (e, t, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.4+314e4831
       */ var a;
      (a = function () {
        'use strict';
        function e(e) {
          return 'function' == typeof e;
        }
        var t = Array.isArray
            ? Array.isArray
            : function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              },
          n = 0,
          a = void 0,
          i = void 0,
          o = function (e, t) {
            (d[n] = e),
              (d[n + 1] = t),
              2 === (n += 2) &&
                // If len is 2, that means that we need to schedule an async flush.
                // If additional callbacks are queued before the queue is flushed, they
                // will be processed by this flush that we are scheduling.
                (i ? i(m) : g());
          };
        var r = 'undefined' != typeof window ? window : void 0,
          s = r || {},
          c = s.MutationObserver || s.WebKitMutationObserver,
          p =
            'undefined' == typeof self &&
            'undefined' != typeof process &&
            '[object process]' === {}.toString.call(process),
          u =
            'undefined' != typeof Uint8ClampedArray &&
            'undefined' != typeof importScripts &&
            'undefined' != typeof MessageChannel;
        function l() {
          // Store setTimeout reference so es6-promise will be unaffected by
          // other code modifying setTimeout (like sinon.useFakeTimers())
          var e = setTimeout;
          return function () {
            return e(m, 1);
          };
        }
        var d = new Array(1e3);
        function m() {
          for (var e = 0; e < n; e += 2) {
            (0, d[e])(d[e + 1]), (d[e] = void 0), (d[e + 1] = void 0);
          }
          n = 0;
        }
        var f,
          h,
          v,
          x,
          g = void 0;
        // Decide what async method to use to triggering processing of queued callbacks:
        function b(e, t) {
          var n = this,
            a = new this.constructor(_);
          void 0 === a[E] && U(a);
          var i = n._state;
          if (i) {
            var r = arguments[i - 1];
            o(function () {
              return L(i, a, r, n._result);
            });
          } else P(n, a, e, t);
          return a;
        }
        /**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/ function y(e) {
          if (e && 'object' == typeof e && e.constructor === this) return e;
          var t = new this(_);
          return S(t, e), t;
        }
        p
          ? (g = function () {
              return process.nextTick(m);
            })
          : c
          ? ((h = 0),
            (v = new c(m)),
            (x = document.createTextNode('')),
            v.observe(x, { characterData: !0 }),
            (g = function () {
              x.data = h = ++h % 2;
            }))
          : u
          ? (((f = new MessageChannel()).port1.onmessage = m),
            (g = function () {
              return f.port2.postMessage(0);
            }))
          : (g =
              void 0 === r
                ? (function () {
                    try {
                      var e = Function('return this')().require('vertx');
                      return void 0 !== (a = e.runOnLoop || e.runOnContext)
                        ? function () {
                            a(m);
                          }
                        : l();
                    } catch (e) {
                      return l();
                    }
                  })()
                : l());
        var E = Math.random().toString(36).substring(2);
        function _() {}
        var w = void 0,
          O = 1,
          T = 2,
          R = { error: null };
        function C(e) {
          try {
            return e.then;
          } catch (e) {
            return (R.error = e), R;
          }
        }
        function A(t, n, a) {
          var i, r, s, c;
          n.constructor === t.constructor &&
          a === b &&
          n.constructor.resolve === y
            ? ((s = t),
              (c = n)._state === O
                ? I(s, c._result)
                : c._state === T
                ? j(s, c._result)
                : P(
                    c,
                    void 0,
                    function (e) {
                      return S(s, e);
                    },
                    function (e) {
                      return j(s, e);
                    },
                  ))
            : a === R
            ? (j(t, R.error), (R.error = null))
            : void 0 === a
            ? I(t, n)
            : e(a)
            ? ((i = n),
              (r = a),
              o(function (e) {
                var t = !1,
                  n = (function (e, t, n, a) {
                    try {
                      e.call(t, n, a);
                    } catch (e) {
                      return e;
                    }
                  })(
                    r,
                    i,
                    function (n) {
                      t || ((t = !0), i !== n ? S(e, n) : I(e, n));
                    },
                    function (n) {
                      t || ((t = !0), j(e, n));
                    },
                    e._label,
                  );
                !t && n && ((t = !0), j(e, n));
              }, t))
            : I(t, n);
        }
        function S(e, t) {
          var n, a;
          e === t
            ? j(e, new TypeError('You cannot resolve a promise with itself'))
            : ((a = typeof (n = t)),
              null === n || ('object' !== a && 'function' !== a)
                ? I(e, t)
                : A(e, t, C(t)));
        }
        function k(e) {
          e._onerror && e._onerror(e._result), D(e);
        }
        function I(e, t) {
          e._state === w &&
            ((e._result = t),
            (e._state = O),
            0 !== e._subscribers.length && o(D, e));
        }
        function j(e, t) {
          e._state === w && ((e._state = T), (e._result = t), o(k, e));
        }
        function P(e, t, n, a) {
          var i = e._subscribers,
            r = i.length;
          (e._onerror = null),
            (i[r] = t),
            (i[r + O] = n),
            (i[r + T] = a),
            0 === r && e._state && o(D, e);
        }
        function D(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (
              var a = void 0, i = void 0, o = e._result, r = 0;
              r < t.length;
              r += 3
            )
              (a = t[r]), (i = t[r + n]), a ? L(n, a, i, o) : i(o);
            e._subscribers.length = 0;
          }
        }
        function L(t, n, a, i) {
          var o = e(a),
            r = void 0,
            s = void 0,
            c = void 0,
            p = void 0;
          if (o) {
            if (
              ((r = (function (e, t) {
                try {
                  return e(t);
                } catch (e) {
                  return (R.error = e), R;
                }
              })(a, i)) === R
                ? ((p = !0), (s = r.error), (r.error = null))
                : (c = !0),
              n === r)
            )
              return void j(
                n,
                new TypeError(
                  'A promises callback cannot return that same promise.',
                ),
              );
          } else (r = i), (c = !0);
          n._state !== w ||
            (o && c
              ? S(n, r)
              : p
              ? j(n, s)
              : t === O
              ? I(n, r)
              : t === T && j(n, r));
        }
        var N = 0;
        function U(e) {
          (e[E] = N++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        var M = (function () {
          function e(e, n) {
            (this._instanceConstructor = e),
              (this.promise = new e(_)),
              this.promise[E] || U(this.promise),
              t(n)
                ? ((this.length = n.length),
                  (this._remaining = n.length),
                  (this._result = new Array(this.length)),
                  0 === this.length
                    ? I(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(n),
                      0 === this._remaining && I(this.promise, this._result)))
                : j(
                    this.promise,
                    new Error('Array Methods must be provided an Array'),
                  );
          }
          return (
            (e.prototype._enumerate = function (e) {
              for (var t = 0; this._state === w && t < e.length; t++)
                this._eachEntry(e[t], t);
            }),
            (e.prototype._eachEntry = function (e, t) {
              var n = this._instanceConstructor,
                a = n.resolve;
              if (a === y) {
                var i = C(e);
                if (i === b && e._state !== w)
                  this._settledAt(e._state, t, e._result);
                else if ('function' != typeof i)
                  this._remaining--, (this._result[t] = e);
                else if (n === G) {
                  var o = new n(_);
                  A(o, e, i), this._willSettleAt(o, t);
                } else
                  this._willSettleAt(
                    new n(function (t) {
                      return t(e);
                    }),
                    t,
                  );
              } else this._willSettleAt(a(e), t);
            }),
            (e.prototype._settledAt = function (e, t, n) {
              var a = this.promise;
              a._state === w &&
                (this._remaining--, e === T ? j(a, n) : (this._result[t] = n)),
                0 === this._remaining && I(a, this._result);
            }),
            (e.prototype._willSettleAt = function (e, t) {
              var n = this;
              P(
                e,
                void 0,
                function (e) {
                  return n._settledAt(O, t, e);
                },
                function (e) {
                  return n._settledAt(T, t, e);
                },
              );
            }),
            e
          );
        })();
        /**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
        /**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/
        var G = (function () {
          function e(t) {
            (this[E] = N++),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              _ !== t &&
                ('function' != typeof t &&
                  (function () {
                    throw new TypeError(
                      'You must pass a resolver function as the first argument to the promise constructor',
                    );
                  })(),
                this instanceof e
                  ? (function (e, t) {
                      try {
                        t(
                          function (t) {
                            S(e, t);
                          },
                          function (t) {
                            j(e, t);
                          },
                        );
                      } catch (t) {
                        j(e, t);
                      }
                    })(this, t)
                  : (function () {
                      throw new TypeError(
                        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
                      );
                    })());
          }
          /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */
          /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */ return (
            (e.prototype.catch = function (e) {
              return this.then(null, e);
            }),
            /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */
            (e.prototype.finally = function (e) {
              var t = this.constructor;
              return this.then(
                function (n) {
                  return t.resolve(e()).then(function () {
                    return n;
                  });
                },
                function (n) {
                  return t.resolve(e()).then(function () {
                    throw n;
                  });
                },
              );
            }),
            e
          );
        })();
        return (
          (G.prototype.then = b),
          (G.all = function (e) {
            return new M(this, e).promise;
          }),
          /**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/ (G.race = function (e) {
            /*jshint validthis:true */
            var n = this;
            return t(e)
              ? new n(function (t, a) {
                  for (var i = e.length, o = 0; o < i; o++)
                    n.resolve(e[o]).then(t, a);
                })
              : new n(function (e, t) {
                  return t(new TypeError('You must pass an array to race.'));
                });
          }),
          /**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/ (G.resolve = y),
          (G.reject = function (e) {
            /*jshint validthis:true */
            var t = new this(_);
            return j(t, e), t;
          }),
          (G._setScheduler = function (e) {
            i = e;
          }),
          (G._setAsap = function (e) {
            o = e;
          }),
          (G._asap = o),
          // Strange compat..
          (G.polyfill =
            /*global self*/
            function () {
              var e = void 0;
              if ('undefined' != typeof global) e = global;
              else if ('undefined' != typeof self) e = self;
              else
                try {
                  e = Function('return this')();
                } catch (e) {
                  throw new Error(
                    'polyfill failed because global object is unavailable in this environment',
                  );
                }
              var t = e.Promise;
              if (t) {
                var n = null;
                try {
                  n = Object.prototype.toString.call(t.resolve());
                } catch (e) {
                  // silently ignored
                }
                if ('[object Promise]' === n && !t.cast) return;
              }
              e.Promise = G;
            }),
          (G.Promise = G),
          G
        );
      }),
        (e.exports = a());
    },
    /* 84 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2);
      function i() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */ (i.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         */
        (i.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         */
        (i.prototype.forEach = function (e) {
          a.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = i);
    },
    /* 85 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2),
        i = n(86),
        o = n(38),
        r = n(17),
        s = n(87),
        c = n(88);
      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      function p(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */ e.exports = function (e) {
        return (
          p(e),
          // Support baseURL config
          e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
          // Ensure headers exist
          (e.headers = e.headers || {}),
          // Transform request data
          (e.data = i(e.data, e.headers, e.transformRequest)),
          // Flatten headers
          (e.headers = a.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers || {},
          )),
          a.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            function (t) {
              delete e.headers[t];
            },
          ),
          (e.adapter || r.adapter)(e).then(
            function (t) {
              return (
                p(e),
                // Transform response data
                (t.data = i(t.data, t.headers, e.transformResponse)),
                t
              );
            },
            function (t) {
              return (
                o(t) ||
                  (p(e),
                  // Transform response data
                  t &&
                    t.response &&
                    (t.response.data = i(
                      t.response.data,
                      t.response.headers,
                      e.transformResponse,
                    ))),
                Promise.reject(t)
              );
            },
          )
        );
      };
    },
    /* 86 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(2);
      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */ e.exports = function (e, t, n) {
        /*eslint no-param-reassign:0*/
        return (
          a.forEach(n, function (n) {
            e = n(e, t);
          }),
          e
        );
      };
    },
    /* 87 */
    /***/ function (e, t, n) {
      'use strict';
      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */ e.exports = function (e) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    /* 88 */
    /***/ function (e, t, n) {
      'use strict';
      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */ e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
      };
    },
    /* 89 */
    /***/ function (e, t, n) {
      'use strict';
      var a = n(39);
      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */ function i(e) {
        if ('function' != typeof e)
          throw new TypeError('executor must be a function.');
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var n = this;
        e(function (e) {
          n.reason || ((n.reason = new a(e)), t(n.reason));
        });
      }
      /**
       * Throws a `Cancel` if cancellation has been requested.
       */ (i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        (i.source = function () {
          var e;
          return {
            token: new i(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (e.exports = i);
    },
    /* 90 */
    /***/ function (e, t, n) {
      'use strict';
      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */ e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    /* 91 */
    /***/ function (e, t) {
      let n = {
        API_HOST: 'https://sso.ifanr.com',
        proxy: {
          host: '127.0.0.1',
          port: '10001',
          protocol: process.env.NODE_ENV ? 'http' : 'https',
          rejectUnauthorized: !1,
        },
      };
      e.exports = n;
    },
    /* 92 */
    /***/ function (e, t, n) {
      /**
       * Module dependencies.
       */
      var a = n(22),
        i = n(23),
        o = n(7),
        r = n(40),
        s = n(4).inherits,
        c = n(14)('http-proxy-agent');
      /**
       * The `HttpProxyAgent` implements an HTTP Agent subclass that connects to the
       * specified "HTTP proxy server" in order to proxy HTTP requests.
       *
       * @api public
       */
      function p(e) {
        if (!(this instanceof p)) return new p(e);
        if (('string' == typeof e && (e = o.parse(e)), !e))
          throw new Error(
            'an HTTP(S) proxy server `host` and `port` must be specified!',
          );
        c('creating new HttpProxyAgent instance: %o', e), r.call(this, e);
        var t = Object.assign({}, e);
        // if `true`, then connect to the proxy server over TLS. defaults to `false`.
        (this.secureProxy = !!t.protocol && /^https:?$/i.test(t.protocol)),
          // prefer `hostname` over `host`, and set the `port` if needed
          (t.host = t.hostname || t.host),
          (t.port = +t.port || (this.secureProxy ? 443 : 80)),
          t.host &&
            t.path &&
            // if both a `host` and `path` are specified then it's most likely the
            // result of a `url.parse()` call... we need to remove the `path` portion so
            // that `net.connect()` doesn't attempt to open that as a unix socket file.
            (delete t.path, delete t.pathname),
          (this.proxy = t);
      }
      /**
       * Module exports.
       */
      (e.exports = p),
        s(p, r),
        /**
         * Called when the node-core HTTP client library is creating a new HTTP request.
         *
         * @api public
         */
        (p.prototype.callback = function (e, t, n) {
          var r = this.proxy,
            s = o.parse(e.path);
          // change the `http.ClientRequest` instance's "path" field
          // to the absolute path of the URL that will be requested
          null == s.protocol && (s.protocol = 'http:'),
            null == s.hostname && (s.hostname = t.hostname || t.host),
            null == s.port && (s.port = t.port),
            80 == s.port &&
              // if port is 80, then we can remove the port so that the
              // ":80" portion is not on the produced URL
              delete s.port;
          var p,
            u = o.format(s);
          // at this point, the http ClientRequest's internal `_header` field might have
          // already been set. If this is the case then we'll need to re-generate the
          // string since we just changed the `req.path`
          if (
            ((e.path = u),
            // inject the `Proxy-Authorization` header if necessary
            r.auth &&
              e.setHeader(
                'Proxy-Authorization',
                'Basic ' + Buffer.from(r.auth).toString('base64'),
              ),
            (p = this.secureProxy ? i.connect(r) : a.connect(r)),
            e._header &&
              (c('regenerating stored HTTP header string for request'),
              (e._header = null),
              e._implicitHeader(),
              e.output && e.output.length > 0))
          ) {
            c('patching connection write() output buffer with updated header');
            // the _header has already been queued to be written to the socket
            var l = e.output[0],
              d = l.indexOf('\r\n\r\n') + 4;
            (e.output[0] = e._header + l.substring(d)),
              c('output buffer: %o', e.output);
          }
          n(null, p);
        });
    },
    /* 93 */
    /***/ function (e, t, n) {
      'use strict';
      const a = n(7),
        i = n(10);
      var o;
      /**
       * This currently needs to be applied to all Node.js versions
       * in order to determine if the `req` is an HTTP or HTTPS request.
       *
       * There is currently no PR attempting to move this property upstream.
       */
      (i.request =
        ((o = i.request),
        function (e, t) {
          let n;
          return (
            null ==
              (n = 'string' == typeof e ? a.parse(e) : Object.assign({}, e))
                .port && (n.port = 443),
            (n.secureEndpoint = !0),
            o.call(i, n, t)
          );
        })),
        /**
         * This is needed for Node.js >= 9.0.0 to make sure `https.get()` uses the
         * patched `https.request()`.
         *
         * Ref: https://github.com/nodejs/node/commit/5118f31
         */
        (i.get = function (e, t) {
          const n = i.request(e, t);
          return n.end(), n;
        });
    },
    /* 94 */
    /***/ function (e, t, n) {
      /**
       * Module dependencies.
       */
      var a = n(22),
        i = n(23),
        o = n(7),
        r = n(40),
        s = n(4).inherits,
        c = n(14)('https-proxy-agent');
      /**
       * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to the
       * specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
       *
       * @api public
       */
      function p(e, t) {
        if (!(this instanceof p)) return new p(e);
        if (('string' == typeof e && (e = o.parse(e)), !e))
          throw new Error(
            'an HTTP(S) proxy server `host` and `port` must be specified!',
          );
        c('creating new HttpsProxyAgent instance: %o', e), r.call(this, e);
        var n = Object.assign({}, e);
        // if `true`, then connect to the proxy server over TLS. defaults to `false`.
        (this.secureProxy = !!n.protocol && /^https:?$/i.test(n.protocol)),
          // prefer `hostname` over `host`, and set the `port` if needed
          (n.host = n.hostname || n.host),
          (n.port = +n.port || (this.secureProxy ? 443 : 80)),
          // ALPN is supported by Node.js >= v5.
          // attempt to negotiate http/1.1 for proxy servers that support http/2
          !this.secureProxy ||
            'ALPNProtocols' in n ||
            (n.ALPNProtocols = ['http 1.1']),
          n.host &&
            n.path &&
            // if both a `host` and `path` are specified then it's most likely the
            // result of a `url.parse()` call... we need to remove the `path` portion so
            // that `net.connect()` doesn't attempt to open that as a unix socket file.
            (delete n.path, delete n.pathname),
          (this.proxy = n),
          (this.defaultPort = 443),
          (this.backendOpts = t);
      }
      /**
       * Module exports.
       */
      (e.exports = p),
        s(p, r),
        /**
         * Called when the node-core HTTP client library is creating a new HTTP request.
         *
         * @api public
         */
        (p.prototype.callback = function (e, t, n) {
          var o,
            r = this.proxy,
            s = [],
            p = 0;
          // create a socket connection to the proxy server
          function u() {
            var e = o.read();
            e ? h(e) : o.once('readable', u);
          }
          function l() {
            o.removeListener('data', h),
              o.removeListener('end', m),
              o.removeListener('error', f),
              o.removeListener('close', d),
              o.removeListener('readable', u);
          }
          function d(e) {
            c('onclose had error %o', e);
          }
          function m() {
            c('onend');
          }
          function f(e) {
            l(), n(e);
          }
          function h(a) {
            s.push(a), (p += a.length);
            var r = Buffer.concat(s, p),
              d = r.toString('ascii');
            if (!~d.indexOf('\r\n\r\n'))
              // keep buffering
              return (
                c('have not received end of HTTP headers yet...'),
                void (o.read ? u() : o.once('data', h))
              );
            var m = d.substring(0, d.indexOf('\r\n')),
              f = +m.split(' ')[1];
            if ((c('got proxy server response: %o', m), 200 == f)) {
              // 200 Connected status code!
              var x = o;
              // nullify the buffered data since we won't be needing it
              (s = r = null),
                t.secureEndpoint &&
                  // since the proxy is connecting to an SSL server, we have
                  // to upgrade this socket connection to an SSL connection
                  (c(
                    'upgrading proxy-connected socket to TLS connection: %o',
                    t.host,
                  ),
                  (t.socket = o),
                  (t.servername = t.servername || t.host),
                  (t.host = null),
                  (t.hostname = null),
                  (t.port = null),
                  (t.key = null),
                  (t.cert = null),
                  this.backendOpts &&
                    (t = Object.assign({}, t, this.backendOpts)),
                  (x = i.connect(t))),
                l(),
                n(null, x);
            }
            // some other status code that's not 200... need to re-play the HTTP header
            // "data" events onto the socket once the HTTP machinery is attached so that
            // the user can parse and handle the error status code
            else
              l(),
                // save a reference to the concat'd Buffer for the `onsocket` callback
                (s = r),
                // need to wait for the "socket" event to re-play the "data" events
                e.once('socket', v),
                n(null, o);
          }
          function v(e) {
            // replay the "buffers" Buffer onto the `socket`, since at this point
            // the HTTP module machinery has been hooked up for the user
            if ('function' == typeof e.ondata)
              // node <= v0.11.3, the `ondata` function is set on the socket
              e.ondata(s, 0, s.length);
            else {
              if (!(e.listeners('data').length > 0))
                // never?
                throw new Error('should not happen...');
              // nullify the cached Buffer instance
              // node > v0.11.3, the "data" event is listened for directly
              e.emit('data', s);
            }
            s = null;
          }
          (o = this.secureProxy ? i.connect(r) : a.connect(r)).on('error', f),
            o.on('close', d),
            o.on('end', m),
            o.read ? u() : o.once('data', h);
          var x = 'CONNECT ' + (t.host + ':' + t.port) + ' HTTP/1.1\r\n',
            g = Object.assign({}, r.headers);
          r.auth &&
            (g['Proxy-Authorization'] =
              'Basic ' + Buffer.from(r.auth).toString('base64'));
          // the Host header should only include the port
          // number when it is a non-standard port
          var b,
            y,
            E = t.host;
          (b = t.port),
            (y = t.secureEndpoint),
            Boolean((!y && 80 === b) || (y && 443 === b)) ||
              (E += ':' + t.port),
            (g.Host = E),
            (g.Connection = 'close'),
            Object.keys(g).forEach(function (e) {
              x += e + ': ' + g[e] + '\r\n';
            }),
            o.write(x + '\r\n');
        });
    },
    /* 95 */
    /***/ function (e, t) {
      e.exports = require('crypto');
      /***/
    },
    /* 96 */
    /***/ function (e, t, n) {
      var a = n(97),
        i = n(4),
        o = n(8),
        r = n(19),
        s = n(10),
        c = n(7).parse,
        p = n(9),
        u = n(100),
        l = n(103),
        d = n(107);
      /**
       * Create readable "multipart/form-data" streams.
       * Can be used to submit forms
       * and file uploads to other web applications.
       *
       * @constructor
       * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
       */
      function m(e) {
        if (!(this instanceof m)) return new m();
        (this._overheadLength = 0),
          (this._valueLength = 0),
          (this._valuesToMeasure = []),
          a.call(this),
          (e = e || {});
        for (var t in e) this[t] = e[t];
      }
      // Public API
      (e.exports = m),
        // make it a Stream
        i.inherits(m, a),
        (m.LINE_BREAK = '\r\n'),
        (m.DEFAULT_CONTENT_TYPE = 'application/octet-stream'),
        (m.prototype.append = function (e, t, n) {
          // allow filename as single option
          'string' == typeof (n = n || {}) && (n = { filename: n });
          var o = a.prototype.append.bind(this);
          // all that streamy business can't handle numbers
          // https://github.com/felixge/node-form-data/issues/38
          if (('number' == typeof t && (t = '' + t), i.isArray(t)))
            // Please convert your array into string
            // the way web server expects it
            this._error(new Error('Arrays are not supported.'));
          else {
            var r = this._multiPartHeader(e, t, n),
              s = this._multiPartFooter();
            o(r),
              o(t),
              o(s),
              // pass along options.knownLength
              this._trackLength(r, t, n);
          }
        }),
        (m.prototype._trackLength = function (e, t, n) {
          var a = 0;
          // used w/ getLengthSync(), when length is known.
          // e.g. for streaming directly from a remote server,
          // w/ a known file a size, and not wanting to wait for
          // incoming file to finish to get its size.
          null != n.knownLength
            ? (a += +n.knownLength)
            : Buffer.isBuffer(t)
            ? (a = t.length)
            : 'string' == typeof t && (a = Buffer.byteLength(t)),
            (this._valueLength += a),
            // @check why add CRLF? does this account for custom/multiple CRLFs?
            (this._overheadLength +=
              Buffer.byteLength(e) + m.LINE_BREAK.length),
            // empty or either doesn't have path or not an http response
            t &&
              (t.path || (t.readable && t.hasOwnProperty('httpVersion'))) &&
              // no need to bother with the length
              (n.knownLength || this._valuesToMeasure.push(t));
        }),
        (m.prototype._lengthRetriever = function (e, t) {
          e.hasOwnProperty('fd')
            ? // take read range into a account
              // `end` = Infinity –> read file till the end
              //
              // TODO: Looks like there is bug in Node fs.createReadStream
              // it doesn't respect `end` options without `start` options
              // Fix it when node fixes it.
              // https://github.com/joyent/node/issues/7819
              void 0 != e.end && e.end != 1 / 0 && void 0 != e.start
              ? // when end specified
                // no need to calculate range
                // inclusive, starts with 0
                t(null, e.end + 1 - (e.start ? e.start : 0))
              : // still need to fetch file size from fs
                p.stat(e.path, function (n, a) {
                  var i;
                  n
                    ? t(n)
                    : // update final size based on the range options
                      ((i = a.size - (e.start ? e.start : 0)), t(null, i));
                })
            : e.hasOwnProperty('httpVersion')
            ? t(null, +e.headers['content-length'])
            : e.hasOwnProperty('httpModule')
            ? // wait till response come back
              (e.on('response', function (n) {
                e.pause(), t(null, +n.headers['content-length']);
              }),
              e.resume())
            : t('Unknown stream');
        }),
        (m.prototype._multiPartHeader = function (e, t, n) {
          // custom header specified (as string)?
          // it becomes responsible for boundary
          // (e.g. to handle extra CRLFs on .NET servers)
          if ('string' == typeof n.header) return n.header;
          var a,
            i = this._getContentDisposition(t, n),
            o = this._getContentType(t, n),
            r = '',
            s = {
              // add custom disposition as third element or keep it two elements if not
              'Content-Disposition': ['form-data', 'name="' + e + '"'].concat(
                i || [],
              ),
              // if no content type. allow it to be empty array
              'Content-Type': [].concat(o || []),
            };
          // allow custom headers.
          'object' == typeof n.header && d(s, n.header);
          for (var c in s)
            s.hasOwnProperty(c) &&
              null != (a = s[c]) &&
              // convert all headers to arrays.
              (Array.isArray(a) || (a = [a]),
              // add non-empty headers.
              a.length && (r += c + ': ' + a.join('; ') + m.LINE_BREAK));
          return '--' + this.getBoundary() + m.LINE_BREAK + r + m.LINE_BREAK;
        }),
        (m.prototype._getContentDisposition = function (e, t) {
          var n, a;
          return (
            'string' == typeof t.filepath
              ? // custom filepath for relative paths
                (n = o.normalize(t.filepath).replace(/\\/g, '/'))
              : t.filename || e.name || e.path
              ? // custom filename take precedence
                // formidable and the browser add a name property
                // fs- and request- streams have path property
                (n = o.basename(t.filename || e.name || e.path))
              : e.readable &&
                e.hasOwnProperty('httpVersion') &&
                // or try http response
                (n = o.basename(e.client._httpMessage.path)),
            n && (a = 'filename="' + n + '"'),
            a
          );
        }),
        (m.prototype._getContentType = function (e, t) {
          // use custom content-type above all
          var n = t.contentType;
          // or try `name` from formidable, browser
          return (
            !n && e.name && (n = u.lookup(e.name)),
            // or try `path` from fs-, request- streams
            !n && e.path && (n = u.lookup(e.path)),
            // or if it's http-reponse
            !n &&
              e.readable &&
              e.hasOwnProperty('httpVersion') &&
              (n = e.headers['content-type']),
            // or guess it from the filepath or filename
            n ||
              (!t.filepath && !t.filename) ||
              (n = u.lookup(t.filepath || t.filename)),
            // fallback to the default content type if `value` is not simple value
            n || 'object' != typeof e || (n = m.DEFAULT_CONTENT_TYPE),
            n
          );
        }),
        (m.prototype._multiPartFooter = function () {
          return function (e) {
            var t = m.LINE_BREAK;
            0 === this._streams.length && (t += this._lastBoundary()), e(t);
          }.bind(this);
        }),
        (m.prototype._lastBoundary = function () {
          return '--' + this.getBoundary() + '--' + m.LINE_BREAK;
        }),
        (m.prototype.getHeaders = function (e) {
          var t,
            n = {
              'content-type':
                'multipart/form-data; boundary=' + this.getBoundary(),
            };
          for (t in e) e.hasOwnProperty(t) && (n[t.toLowerCase()] = e[t]);
          return n;
        }),
        (m.prototype.getBoundary = function () {
          return this._boundary || this._generateBoundary(), this._boundary;
        }),
        (m.prototype._generateBoundary = function () {
          for (
            // This generates a 50 character boundary similar to those used by Firefox.
            // They are optimized for boyer-moore parsing.
            var e = '--------------------------', t = 0;
            t < 24;
            t++
          )
            e += Math.floor(10 * Math.random()).toString(16);
          this._boundary = e;
        }),
        // Note: getLengthSync DOESN'T calculate streams length
        // As workaround one can calculate file size manually
        // and add it as knownLength option
        (m.prototype.getLengthSync = function () {
          var e = this._overheadLength + this._valueLength;
          // Don't get confused, there are 3 "internal" streams for each keyval pair
          // so it basically checks if there is any value added to the form
          return (
            this._streams.length && (e += this._lastBoundary().length),
            // https://github.com/form-data/form-data/issues/40
            this.hasKnownLength() ||
              // Some async length retrievers are present
              // therefore synchronous length calculation is false.
              // Please use getLength(callback) to get proper length
              this._error(
                new Error('Cannot calculate proper length in synchronous way.'),
              ),
            e
          );
        }),
        // Public API to check if length of added values is known
        // https://github.com/form-data/form-data/issues/196
        // https://github.com/form-data/form-data/issues/262
        (m.prototype.hasKnownLength = function () {
          var e = !0;
          return this._valuesToMeasure.length && (e = !1), e;
        }),
        (m.prototype.getLength = function (e) {
          var t = this._overheadLength + this._valueLength;
          this._streams.length && (t += this._lastBoundary().length),
            this._valuesToMeasure.length
              ? l.parallel(
                  this._valuesToMeasure,
                  this._lengthRetriever,
                  function (n, a) {
                    n
                      ? e(n)
                      : (a.forEach(function (e) {
                          t += e;
                        }),
                        e(null, t));
                  },
                )
              : process.nextTick(e.bind(this, null, t));
        }),
        (m.prototype.submit = function (e, t) {
          var n,
            a,
            i = { method: 'post' };
          // parse provided url if it's string
          // or treat it as options object
          return (
            'string' == typeof e
              ? ((e = c(e)),
                (a = d(
                  {
                    port: e.port,
                    path: e.pathname,
                    host: e.hostname,
                    protocol: e.protocol,
                  },
                  i,
                )))
              : // if no port provided use default one
                (a = d(e, i)).port ||
                (a.port = 'https:' == a.protocol ? 443 : 80),
            // put that good code in getHeaders to some use
            (a.headers = this.getHeaders(e.headers)),
            // https if specified, fallback to http in any other case
            (n = 'https:' == a.protocol ? s.request(a) : r.request(a)),
            // get content length and fire away
            this.getLength(
              function (e, a) {
                e
                  ? this._error(e)
                  : // add content length
                    (n.setHeader('Content-Length', a),
                    this.pipe(n),
                    t &&
                      (n.on('error', t), n.on('response', t.bind(this, null))));
              }.bind(this),
            ),
            n
          );
        }),
        (m.prototype._error = function (e) {
          this.error || ((this.error = e), this.pause(), this.emit('error', e));
        }),
        (m.prototype.toString = function () {
          return '[object FormData]';
        });
    },
    /* 97 */
    /***/ function (e, t, n) {
      var a = n(4),
        i = n(21).Stream,
        o = n(98),
        r = n(99);
      function s() {
        (this.writable = !1),
          (this.readable = !0),
          (this.dataSize = 0),
          (this.maxDataSize = 2097152),
          (this.pauseStreams = !0),
          (this._released = !1),
          (this._streams = []),
          (this._currentStream = null);
      }
      (e.exports = s),
        a.inherits(s, i),
        (s.create = function (e) {
          var t = new this();
          e = e || {};
          for (var n in e) t[n] = e[n];
          return t;
        }),
        (s.isStreamLike = function (e) {
          return (
            'function' != typeof e &&
            'string' != typeof e &&
            'boolean' != typeof e &&
            'number' != typeof e &&
            !Buffer.isBuffer(e)
          );
        }),
        (s.prototype.append = function (e) {
          if (s.isStreamLike(e)) {
            if (!(e instanceof o)) {
              var t = o.create(e, {
                maxDataSize: 1 / 0,
                pauseStream: this.pauseStreams,
              });
              e.on('data', this._checkDataSize.bind(this)), (e = t);
            }
            this._handleErrors(e), this.pauseStreams && e.pause();
          }
          return this._streams.push(e), this;
        }),
        (s.prototype.pipe = function (e, t) {
          return i.prototype.pipe.call(this, e, t), this.resume(), e;
        }),
        (s.prototype._getNext = function () {
          this._currentStream = null;
          var e = this._streams.shift();
          void 0 !== e
            ? 'function' == typeof e
              ? e(
                  function (e) {
                    s.isStreamLike(e) &&
                      (e.on('data', this._checkDataSize.bind(this)),
                      this._handleErrors(e)),
                      r(this._pipeNext.bind(this, e));
                  }.bind(this),
                )
              : this._pipeNext(e)
            : this.end();
        }),
        (s.prototype._pipeNext = function (e) {
          if (((this._currentStream = e), s.isStreamLike(e)))
            return (
              e.on('end', this._getNext.bind(this)),
              void e.pipe(this, { end: !1 })
            );
          var t = e;
          this.write(t), this._getNext();
        }),
        (s.prototype._handleErrors = function (e) {
          var t = this;
          e.on('error', function (e) {
            t._emitError(e);
          });
        }),
        (s.prototype.write = function (e) {
          this.emit('data', e);
        }),
        (s.prototype.pause = function () {
          this.pauseStreams &&
            (this.pauseStreams &&
              this._currentStream &&
              'function' == typeof this._currentStream.pause &&
              this._currentStream.pause(),
            this.emit('pause'));
        }),
        (s.prototype.resume = function () {
          this._released ||
            ((this._released = !0), (this.writable = !0), this._getNext()),
            this.pauseStreams &&
              this._currentStream &&
              'function' == typeof this._currentStream.resume &&
              this._currentStream.resume(),
            this.emit('resume');
        }),
        (s.prototype.end = function () {
          this._reset(), this.emit('end');
        }),
        (s.prototype.destroy = function () {
          this._reset(), this.emit('close');
        }),
        (s.prototype._reset = function () {
          (this.writable = !1),
            (this._streams = []),
            (this._currentStream = null);
        }),
        (s.prototype._checkDataSize = function () {
          if ((this._updateDataSize(), !(this.dataSize <= this.maxDataSize))) {
            var e =
              'DelayedStream#maxDataSize of ' +
              this.maxDataSize +
              ' bytes exceeded.';
            this._emitError(new Error(e));
          }
        }),
        (s.prototype._updateDataSize = function () {
          this.dataSize = 0;
          var e = this;
          this._streams.forEach(function (t) {
            t.dataSize && (e.dataSize += t.dataSize);
          }),
            this._currentStream &&
              this._currentStream.dataSize &&
              (this.dataSize += this._currentStream.dataSize);
        }),
        (s.prototype._emitError = function (e) {
          this._reset(), this.emit('error', e);
        });
    },
    /* 98 */
    /***/ function (e, t, n) {
      var a = n(21).Stream,
        i = n(4);
      function o() {
        (this.source = null),
          (this.dataSize = 0),
          (this.maxDataSize = 1048576),
          (this.pauseStream = !0),
          (this._maxDataSizeExceeded = !1),
          (this._released = !1),
          (this._bufferedEvents = []);
      }
      (e.exports = o),
        i.inherits(o, a),
        (o.create = function (e, t) {
          var n = new this();
          t = t || {};
          for (var a in t) n[a] = t[a];
          n.source = e;
          var i = e.emit;
          return (
            (e.emit = function () {
              return n._handleEmit(arguments), i.apply(e, arguments);
            }),
            e.on('error', function () {}),
            n.pauseStream && e.pause(),
            n
          );
        }),
        Object.defineProperty(o.prototype, 'readable', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.source.readable;
          },
        }),
        (o.prototype.setEncoding = function () {
          return this.source.setEncoding.apply(this.source, arguments);
        }),
        (o.prototype.resume = function () {
          this._released || this.release(), this.source.resume();
        }),
        (o.prototype.pause = function () {
          this.source.pause();
        }),
        (o.prototype.release = function () {
          (this._released = !0),
            this._bufferedEvents.forEach(
              function (e) {
                this.emit.apply(this, e);
              }.bind(this),
            ),
            (this._bufferedEvents = []);
        }),
        (o.prototype.pipe = function () {
          var e = a.prototype.pipe.apply(this, arguments);
          return this.resume(), e;
        }),
        (o.prototype._handleEmit = function (e) {
          this._released
            ? this.emit.apply(this, e)
            : ('data' === e[0] &&
                ((this.dataSize += e[1].length),
                this._checkIfMaxDataSizeExceeded()),
              this._bufferedEvents.push(e));
        }),
        (o.prototype._checkIfMaxDataSizeExceeded = function () {
          if (
            !(this._maxDataSizeExceeded || this.dataSize <= this.maxDataSize)
          ) {
            this._maxDataSizeExceeded = !0;
            var e =
              'DelayedStream#maxDataSize of ' +
              this.maxDataSize +
              ' bytes exceeded.';
            this.emit('error', new Error(e));
          }
        });
    },
    /* 99 */
    /***/ function (e, t) {
      e.exports =
        /**
         * Runs provided function on next iteration of the event loop
         *
         * @param {function} fn - function to run
         */
        function (e) {
          var t =
            'function' == typeof setImmediate
              ? setImmediate
              : 'object' == typeof process &&
                'function' == typeof process.nextTick
              ? process.nextTick
              : null;
          t ? t(e) : setTimeout(e, 0);
        };
      /***/
    },
    /* 100 */
    /***/ function (e, t, n) {
      'use strict';
      /*!
       * mime-types
       * Copyright(c) 2014 Jonathan Ong
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */
      /**
       * Module dependencies.
       * @private
       */ var a,
        i,
        o,
        r = n(101),
        s = n(8).extname,
        /**
         * Module variables.
         * @private
         */ c = /^\s*([^;\s]*)(?:;|\s|$)/,
        p = /^text\//i;
      /**
       * Module exports.
       * @public
       */ /**
       * Get the default charset for a MIME type.
       *
       * @param {string} type
       * @return {boolean|string}
       */
      function u(e) {
        if (!e || 'string' != typeof e) return !1;
        // TODO: use media-typer
        var t = c.exec(e),
          n = t && r[t[1].toLowerCase()];
        return n && n.charset
          ? n.charset
          : // default text/* to utf-8
            !(!t || !p.test(t[1])) && 'UTF-8';
      }
      /**
       * Create a full Content-Type header given a MIME type or extension.
       *
       * @param {string} str
       * @return {boolean|string}
       */ (t.charset = u),
        (t.charsets = { lookup: u }),
        (t.contentType = function (e) {
          // TODO: should this even be in this module?
          if (!e || 'string' != typeof e) return !1;
          var n = -1 === e.indexOf('/') ? t.lookup(e) : e;
          if (!n) return !1;
          // TODO: use content-type or other module
          if (-1 === n.indexOf('charset')) {
            var a = t.charset(n);
            a && (n += '; charset=' + a.toLowerCase());
          }
          return n;
        }),
        /**
         * Get the default extension for a MIME type.
         *
         * @param {string} type
         * @return {boolean|string}
         */ (t.extension = function (e) {
          if (!e || 'string' != typeof e) return !1;
          // TODO: use media-typer
          var n = c.exec(e),
            a = n && t.extensions[n[1].toLowerCase()];
          // get extensions
          if (!a || !a.length) return !1;
          return a[0];
        }),
        /**
         * Lookup the MIME type for a file path/extension.
         *
         * @param {string} path
         * @return {boolean|string}
         */ (t.extensions = Object.create(null)),
        (t.lookup = function (e) {
          if (!e || 'string' != typeof e) return !1;
          // get the extension ("ext" or ".ext" or full path)
          var n = s('x.' + e)
            .toLowerCase()
            .substr(1);
          if (!n) return !1;
          return t.types[n] || !1;
        }),
        /**
         * Populate the extensions and types maps.
         * @private
         */ (t.types = Object.create(null)),
        // Populate the extensions/types maps
        (a = t.extensions),
        (i = t.types),
        (o = ['nginx', 'apache', void 0, 'iana']),
        Object.keys(r).forEach(function (e) {
          var t = r[e],
            n = t.extensions;
          if (n && n.length) {
            // mime -> extensions
            a[e] = n;
            // extension -> mime
            for (var s = 0; s < n.length; s++) {
              var c = n[s];
              if (i[c]) {
                var p = o.indexOf(r[i[c]].source),
                  u = o.indexOf(t.source);
                if (
                  'application/octet-stream' !== i[c] &&
                  (p > u || (p === u && 'application/' === i[c].substr(0, 12)))
                )
                  // skip the remapping
                  continue;
              }
              // set the extension -> mime
              i[c] = e;
            }
          }
        });
    },
    /* 101 */
    /***/ function (e, t, n) {
      /*!
       * mime-db
       * Copyright(c) 2014 Jonathan Ong
       * MIT Licensed
       */
      /**
       * Module exports.
       */
      e.exports = n(102);
      /***/
    },
    /* 102 */
    /***/ function (e, t) {
      e.exports = {
        'application/1d-interleaved-parityfec': { source: 'iana' },
        'application/3gpdash-qoe-report+xml': { source: 'iana' },
        'application/3gpp-ims+xml': { source: 'iana' },
        'application/a2l': { source: 'iana' },
        'application/activemessage': { source: 'iana' },
        'application/alto-costmap+json': { source: 'iana', compressible: !0 },
        'application/alto-costmapfilter+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/alto-directory+json': { source: 'iana', compressible: !0 },
        'application/alto-endpointcost+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/alto-endpointcostparams+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/alto-endpointprop+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/alto-endpointpropparams+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/alto-error+json': { source: 'iana', compressible: !0 },
        'application/alto-networkmap+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/alto-networkmapfilter+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/aml': { source: 'iana' },
        'application/andrew-inset': { source: 'iana', extensions: ['ez'] },
        'application/applefile': { source: 'iana' },
        'application/applixware': { source: 'apache', extensions: ['aw'] },
        'application/atf': { source: 'iana' },
        'application/atfx': { source: 'iana' },
        'application/atom+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['atom'],
        },
        'application/atomcat+xml': { source: 'iana', extensions: ['atomcat'] },
        'application/atomdeleted+xml': { source: 'iana' },
        'application/atomicmail': { source: 'iana' },
        'application/atomsvc+xml': { source: 'iana', extensions: ['atomsvc'] },
        'application/atxml': { source: 'iana' },
        'application/auth-policy+xml': { source: 'iana' },
        'application/bacnet-xdd+zip': { source: 'iana' },
        'application/batch-smtp': { source: 'iana' },
        'application/bdoc': { compressible: !1, extensions: ['bdoc'] },
        'application/beep+xml': { source: 'iana' },
        'application/calendar+json': { source: 'iana', compressible: !0 },
        'application/calendar+xml': { source: 'iana' },
        'application/call-completion': { source: 'iana' },
        'application/cals-1840': { source: 'iana' },
        'application/cbor': { source: 'iana' },
        'application/cccex': { source: 'iana' },
        'application/ccmp+xml': { source: 'iana' },
        'application/ccxml+xml': { source: 'iana', extensions: ['ccxml'] },
        'application/cdfx+xml': { source: 'iana' },
        'application/cdmi-capability': {
          source: 'iana',
          extensions: ['cdmia'],
        },
        'application/cdmi-container': { source: 'iana', extensions: ['cdmic'] },
        'application/cdmi-domain': { source: 'iana', extensions: ['cdmid'] },
        'application/cdmi-object': { source: 'iana', extensions: ['cdmio'] },
        'application/cdmi-queue': { source: 'iana', extensions: ['cdmiq'] },
        'application/cdni': { source: 'iana' },
        'application/cea': { source: 'iana' },
        'application/cea-2018+xml': { source: 'iana' },
        'application/cellml+xml': { source: 'iana' },
        'application/cfw': { source: 'iana' },
        'application/clue_info+xml': { source: 'iana' },
        'application/cms': { source: 'iana' },
        'application/cnrp+xml': { source: 'iana' },
        'application/coap-group+json': { source: 'iana', compressible: !0 },
        'application/coap-payload': { source: 'iana' },
        'application/commonground': { source: 'iana' },
        'application/conference-info+xml': { source: 'iana' },
        'application/cose': { source: 'iana' },
        'application/cose-key': { source: 'iana' },
        'application/cose-key-set': { source: 'iana' },
        'application/cpl+xml': { source: 'iana' },
        'application/csrattrs': { source: 'iana' },
        'application/csta+xml': { source: 'iana' },
        'application/cstadata+xml': { source: 'iana' },
        'application/csvm+json': { source: 'iana', compressible: !0 },
        'application/cu-seeme': { source: 'apache', extensions: ['cu'] },
        'application/cybercash': { source: 'iana' },
        'application/dart': { compressible: !0 },
        'application/dash+xml': { source: 'iana', extensions: ['mpd'] },
        'application/dashdelta': { source: 'iana' },
        'application/davmount+xml': {
          source: 'iana',
          extensions: ['davmount'],
        },
        'application/dca-rft': { source: 'iana' },
        'application/dcd': { source: 'iana' },
        'application/dec-dx': { source: 'iana' },
        'application/dialog-info+xml': { source: 'iana' },
        'application/dicom': { source: 'iana' },
        'application/dicom+json': { source: 'iana', compressible: !0 },
        'application/dicom+xml': { source: 'iana' },
        'application/dii': { source: 'iana' },
        'application/dit': { source: 'iana' },
        'application/dns': { source: 'iana' },
        'application/docbook+xml': { source: 'apache', extensions: ['dbk'] },
        'application/dskpp+xml': { source: 'iana' },
        'application/dssc+der': { source: 'iana', extensions: ['dssc'] },
        'application/dssc+xml': { source: 'iana', extensions: ['xdssc'] },
        'application/dvcs': { source: 'iana' },
        'application/ecmascript': {
          source: 'iana',
          compressible: !0,
          extensions: ['ecma'],
        },
        'application/edi-consent': { source: 'iana' },
        'application/edi-x12': { source: 'iana', compressible: !1 },
        'application/edifact': { source: 'iana', compressible: !1 },
        'application/efi': { source: 'iana' },
        'application/emergencycalldata.comment+xml': { source: 'iana' },
        'application/emergencycalldata.control+xml': { source: 'iana' },
        'application/emergencycalldata.deviceinfo+xml': { source: 'iana' },
        'application/emergencycalldata.ecall.msd': { source: 'iana' },
        'application/emergencycalldata.providerinfo+xml': { source: 'iana' },
        'application/emergencycalldata.serviceinfo+xml': { source: 'iana' },
        'application/emergencycalldata.subscriberinfo+xml': { source: 'iana' },
        'application/emergencycalldata.veds+xml': { source: 'iana' },
        'application/emma+xml': { source: 'iana', extensions: ['emma'] },
        'application/emotionml+xml': { source: 'iana' },
        'application/encaprtp': { source: 'iana' },
        'application/epp+xml': { source: 'iana' },
        'application/epub+zip': { source: 'iana', extensions: ['epub'] },
        'application/eshop': { source: 'iana' },
        'application/exi': { source: 'iana', extensions: ['exi'] },
        'application/fastinfoset': { source: 'iana' },
        'application/fastsoap': { source: 'iana' },
        'application/fdt+xml': { source: 'iana' },
        'application/fido.trusted-apps+json': { compressible: !0 },
        'application/fits': { source: 'iana' },
        'application/font-sfnt': { source: 'iana' },
        'application/font-tdpfr': { source: 'iana', extensions: ['pfr'] },
        'application/font-woff': {
          source: 'iana',
          compressible: !1,
          extensions: ['woff'],
        },
        'application/font-woff2': { compressible: !1, extensions: ['woff2'] },
        'application/framework-attributes+xml': { source: 'iana' },
        'application/geo+json': {
          source: 'iana',
          compressible: !0,
          extensions: ['geojson'],
        },
        'application/geo+json-seq': { source: 'iana' },
        'application/geoxacml+xml': { source: 'iana' },
        'application/gml+xml': { source: 'iana', extensions: ['gml'] },
        'application/gpx+xml': { source: 'apache', extensions: ['gpx'] },
        'application/gxf': { source: 'apache', extensions: ['gxf'] },
        'application/gzip': {
          source: 'iana',
          compressible: !1,
          extensions: ['gz'],
        },
        'application/h224': { source: 'iana' },
        'application/held+xml': { source: 'iana' },
        'application/http': { source: 'iana' },
        'application/hyperstudio': { source: 'iana', extensions: ['stk'] },
        'application/ibe-key-request+xml': { source: 'iana' },
        'application/ibe-pkg-reply+xml': { source: 'iana' },
        'application/ibe-pp-data': { source: 'iana' },
        'application/iges': { source: 'iana' },
        'application/im-iscomposing+xml': { source: 'iana' },
        'application/index': { source: 'iana' },
        'application/index.cmd': { source: 'iana' },
        'application/index.obj': { source: 'iana' },
        'application/index.response': { source: 'iana' },
        'application/index.vnd': { source: 'iana' },
        'application/inkml+xml': {
          source: 'iana',
          extensions: ['ink', 'inkml'],
        },
        'application/iotp': { source: 'iana' },
        'application/ipfix': { source: 'iana', extensions: ['ipfix'] },
        'application/ipp': { source: 'iana' },
        'application/isup': { source: 'iana' },
        'application/its+xml': { source: 'iana' },
        'application/java-archive': {
          source: 'apache',
          compressible: !1,
          extensions: ['jar', 'war', 'ear'],
        },
        'application/java-serialized-object': {
          source: 'apache',
          compressible: !1,
          extensions: ['ser'],
        },
        'application/java-vm': {
          source: 'apache',
          compressible: !1,
          extensions: ['class'],
        },
        'application/javascript': {
          source: 'iana',
          charset: 'UTF-8',
          compressible: !0,
          extensions: ['js', 'mjs'],
        },
        'application/jf2feed+json': { source: 'iana', compressible: !0 },
        'application/jose': { source: 'iana' },
        'application/jose+json': { source: 'iana', compressible: !0 },
        'application/jrd+json': { source: 'iana', compressible: !0 },
        'application/json': {
          source: 'iana',
          charset: 'UTF-8',
          compressible: !0,
          extensions: ['json', 'map'],
        },
        'application/json-patch+json': { source: 'iana', compressible: !0 },
        'application/json-seq': { source: 'iana' },
        'application/json5': { extensions: ['json5'] },
        'application/jsonml+json': {
          source: 'apache',
          compressible: !0,
          extensions: ['jsonml'],
        },
        'application/jwk+json': { source: 'iana', compressible: !0 },
        'application/jwk-set+json': { source: 'iana', compressible: !0 },
        'application/jwt': { source: 'iana' },
        'application/kpml-request+xml': { source: 'iana' },
        'application/kpml-response+xml': { source: 'iana' },
        'application/ld+json': {
          source: 'iana',
          compressible: !0,
          extensions: ['jsonld'],
        },
        'application/lgr+xml': { source: 'iana' },
        'application/link-format': { source: 'iana' },
        'application/load-control+xml': { source: 'iana' },
        'application/lost+xml': { source: 'iana', extensions: ['lostxml'] },
        'application/lostsync+xml': { source: 'iana' },
        'application/lxf': { source: 'iana' },
        'application/mac-binhex40': { source: 'iana', extensions: ['hqx'] },
        'application/mac-compactpro': { source: 'apache', extensions: ['cpt'] },
        'application/macwriteii': { source: 'iana' },
        'application/mads+xml': { source: 'iana', extensions: ['mads'] },
        'application/manifest+json': {
          charset: 'UTF-8',
          compressible: !0,
          extensions: ['webmanifest'],
        },
        'application/marc': { source: 'iana', extensions: ['mrc'] },
        'application/marcxml+xml': { source: 'iana', extensions: ['mrcx'] },
        'application/mathematica': {
          source: 'iana',
          extensions: ['ma', 'nb', 'mb'],
        },
        'application/mathml+xml': { source: 'iana', extensions: ['mathml'] },
        'application/mathml-content+xml': { source: 'iana' },
        'application/mathml-presentation+xml': { source: 'iana' },
        'application/mbms-associated-procedure-description+xml': {
          source: 'iana',
        },
        'application/mbms-deregister+xml': { source: 'iana' },
        'application/mbms-envelope+xml': { source: 'iana' },
        'application/mbms-msk+xml': { source: 'iana' },
        'application/mbms-msk-response+xml': { source: 'iana' },
        'application/mbms-protection-description+xml': { source: 'iana' },
        'application/mbms-reception-report+xml': { source: 'iana' },
        'application/mbms-register+xml': { source: 'iana' },
        'application/mbms-register-response+xml': { source: 'iana' },
        'application/mbms-schedule+xml': { source: 'iana' },
        'application/mbms-user-service-description+xml': { source: 'iana' },
        'application/mbox': { source: 'iana', extensions: ['mbox'] },
        'application/media-policy-dataset+xml': { source: 'iana' },
        'application/media_control+xml': { source: 'iana' },
        'application/mediaservercontrol+xml': {
          source: 'iana',
          extensions: ['mscml'],
        },
        'application/merge-patch+json': { source: 'iana', compressible: !0 },
        'application/metalink+xml': {
          source: 'apache',
          extensions: ['metalink'],
        },
        'application/metalink4+xml': { source: 'iana', extensions: ['meta4'] },
        'application/mets+xml': { source: 'iana', extensions: ['mets'] },
        'application/mf4': { source: 'iana' },
        'application/mikey': { source: 'iana' },
        'application/mmt-usd+xml': { source: 'iana' },
        'application/mods+xml': { source: 'iana', extensions: ['mods'] },
        'application/moss-keys': { source: 'iana' },
        'application/moss-signature': { source: 'iana' },
        'application/mosskey-data': { source: 'iana' },
        'application/mosskey-request': { source: 'iana' },
        'application/mp21': { source: 'iana', extensions: ['m21', 'mp21'] },
        'application/mp4': { source: 'iana', extensions: ['mp4s', 'm4p'] },
        'application/mpeg4-generic': { source: 'iana' },
        'application/mpeg4-iod': { source: 'iana' },
        'application/mpeg4-iod-xmt': { source: 'iana' },
        'application/mrb-consumer+xml': { source: 'iana' },
        'application/mrb-publish+xml': { source: 'iana' },
        'application/msc-ivr+xml': { source: 'iana' },
        'application/msc-mixer+xml': { source: 'iana' },
        'application/msword': {
          source: 'iana',
          compressible: !1,
          extensions: ['doc', 'dot'],
        },
        'application/mud+json': { source: 'iana', compressible: !0 },
        'application/mxf': { source: 'iana', extensions: ['mxf'] },
        'application/n-quads': { source: 'iana' },
        'application/n-triples': { source: 'iana' },
        'application/nasdata': { source: 'iana' },
        'application/news-checkgroups': { source: 'iana' },
        'application/news-groupinfo': { source: 'iana' },
        'application/news-transmission': { source: 'iana' },
        'application/nlsml+xml': { source: 'iana' },
        'application/nss': { source: 'iana' },
        'application/ocsp-request': { source: 'iana' },
        'application/ocsp-response': { source: 'iana' },
        'application/octet-stream': {
          source: 'iana',
          compressible: !1,
          extensions: [
            'bin',
            'dms',
            'lrf',
            'mar',
            'so',
            'dist',
            'distz',
            'pkg',
            'bpk',
            'dump',
            'elc',
            'deploy',
            'exe',
            'dll',
            'deb',
            'dmg',
            'iso',
            'img',
            'msi',
            'msp',
            'msm',
            'buffer',
          ],
        },
        'application/oda': { source: 'iana', extensions: ['oda'] },
        'application/odx': { source: 'iana' },
        'application/oebps-package+xml': {
          source: 'iana',
          extensions: ['opf'],
        },
        'application/ogg': {
          source: 'iana',
          compressible: !1,
          extensions: ['ogx'],
        },
        'application/omdoc+xml': { source: 'apache', extensions: ['omdoc'] },
        'application/onenote': {
          source: 'apache',
          extensions: ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
        },
        'application/oxps': { source: 'iana', extensions: ['oxps'] },
        'application/p2p-overlay+xml': { source: 'iana' },
        'application/parityfec': { source: 'iana' },
        'application/passport': { source: 'iana' },
        'application/patch-ops-error+xml': {
          source: 'iana',
          extensions: ['xer'],
        },
        'application/pdf': {
          source: 'iana',
          compressible: !1,
          extensions: ['pdf'],
        },
        'application/pdx': { source: 'iana' },
        'application/pgp-encrypted': {
          source: 'iana',
          compressible: !1,
          extensions: ['pgp'],
        },
        'application/pgp-keys': { source: 'iana' },
        'application/pgp-signature': {
          source: 'iana',
          extensions: ['asc', 'sig'],
        },
        'application/pics-rules': { source: 'apache', extensions: ['prf'] },
        'application/pidf+xml': { source: 'iana' },
        'application/pidf-diff+xml': { source: 'iana' },
        'application/pkcs10': { source: 'iana', extensions: ['p10'] },
        'application/pkcs12': { source: 'iana' },
        'application/pkcs7-mime': {
          source: 'iana',
          extensions: ['p7m', 'p7c'],
        },
        'application/pkcs7-signature': { source: 'iana', extensions: ['p7s'] },
        'application/pkcs8': { source: 'iana', extensions: ['p8'] },
        'application/pkix-attr-cert': { source: 'iana', extensions: ['ac'] },
        'application/pkix-cert': { source: 'iana', extensions: ['cer'] },
        'application/pkix-crl': { source: 'iana', extensions: ['crl'] },
        'application/pkix-pkipath': { source: 'iana', extensions: ['pkipath'] },
        'application/pkixcmp': { source: 'iana', extensions: ['pki'] },
        'application/pls+xml': { source: 'iana', extensions: ['pls'] },
        'application/poc-settings+xml': { source: 'iana' },
        'application/postscript': {
          source: 'iana',
          compressible: !0,
          extensions: ['ai', 'eps', 'ps'],
        },
        'application/ppsp-tracker+json': { source: 'iana', compressible: !0 },
        'application/problem+json': { source: 'iana', compressible: !0 },
        'application/problem+xml': { source: 'iana' },
        'application/provenance+xml': { source: 'iana' },
        'application/prs.alvestrand.titrax-sheet': { source: 'iana' },
        'application/prs.cww': { source: 'iana', extensions: ['cww'] },
        'application/prs.hpub+zip': { source: 'iana' },
        'application/prs.nprend': { source: 'iana' },
        'application/prs.plucker': { source: 'iana' },
        'application/prs.rdf-xml-crypt': { source: 'iana' },
        'application/prs.xsf+xml': { source: 'iana' },
        'application/pskc+xml': { source: 'iana', extensions: ['pskcxml'] },
        'application/qsig': { source: 'iana' },
        'application/raptorfec': { source: 'iana' },
        'application/rdap+json': { source: 'iana', compressible: !0 },
        'application/rdf+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['rdf'],
        },
        'application/reginfo+xml': { source: 'iana', extensions: ['rif'] },
        'application/relax-ng-compact-syntax': {
          source: 'iana',
          extensions: ['rnc'],
        },
        'application/remote-printing': { source: 'iana' },
        'application/reputon+json': { source: 'iana', compressible: !0 },
        'application/resource-lists+xml': {
          source: 'iana',
          extensions: ['rl'],
        },
        'application/resource-lists-diff+xml': {
          source: 'iana',
          extensions: ['rld'],
        },
        'application/rfc+xml': { source: 'iana' },
        'application/riscos': { source: 'iana' },
        'application/rlmi+xml': { source: 'iana' },
        'application/rls-services+xml': { source: 'iana', extensions: ['rs'] },
        'application/route-apd+xml': { source: 'iana' },
        'application/route-s-tsid+xml': { source: 'iana' },
        'application/route-usd+xml': { source: 'iana' },
        'application/rpki-ghostbusters': {
          source: 'iana',
          extensions: ['gbr'],
        },
        'application/rpki-manifest': { source: 'iana', extensions: ['mft'] },
        'application/rpki-publication': { source: 'iana' },
        'application/rpki-roa': { source: 'iana', extensions: ['roa'] },
        'application/rpki-updown': { source: 'iana' },
        'application/rsd+xml': { source: 'apache', extensions: ['rsd'] },
        'application/rss+xml': {
          source: 'apache',
          compressible: !0,
          extensions: ['rss'],
        },
        'application/rtf': {
          source: 'iana',
          compressible: !0,
          extensions: ['rtf'],
        },
        'application/rtploopback': { source: 'iana' },
        'application/rtx': { source: 'iana' },
        'application/samlassertion+xml': { source: 'iana' },
        'application/samlmetadata+xml': { source: 'iana' },
        'application/sbml+xml': { source: 'iana', extensions: ['sbml'] },
        'application/scaip+xml': { source: 'iana' },
        'application/scim+json': { source: 'iana', compressible: !0 },
        'application/scvp-cv-request': { source: 'iana', extensions: ['scq'] },
        'application/scvp-cv-response': { source: 'iana', extensions: ['scs'] },
        'application/scvp-vp-request': { source: 'iana', extensions: ['spq'] },
        'application/scvp-vp-response': { source: 'iana', extensions: ['spp'] },
        'application/sdp': { source: 'iana', extensions: ['sdp'] },
        'application/sep+xml': { source: 'iana' },
        'application/sep-exi': { source: 'iana' },
        'application/session-info': { source: 'iana' },
        'application/set-payment': { source: 'iana' },
        'application/set-payment-initiation': {
          source: 'iana',
          extensions: ['setpay'],
        },
        'application/set-registration': { source: 'iana' },
        'application/set-registration-initiation': {
          source: 'iana',
          extensions: ['setreg'],
        },
        'application/sgml': { source: 'iana' },
        'application/sgml-open-catalog': { source: 'iana' },
        'application/shf+xml': { source: 'iana', extensions: ['shf'] },
        'application/sieve': { source: 'iana' },
        'application/simple-filter+xml': { source: 'iana' },
        'application/simple-message-summary': { source: 'iana' },
        'application/simplesymbolcontainer': { source: 'iana' },
        'application/slate': { source: 'iana' },
        'application/smil': { source: 'iana' },
        'application/smil+xml': { source: 'iana', extensions: ['smi', 'smil'] },
        'application/smpte336m': { source: 'iana' },
        'application/soap+fastinfoset': { source: 'iana' },
        'application/soap+xml': { source: 'iana', compressible: !0 },
        'application/sparql-query': { source: 'iana', extensions: ['rq'] },
        'application/sparql-results+xml': {
          source: 'iana',
          extensions: ['srx'],
        },
        'application/spirits-event+xml': { source: 'iana' },
        'application/sql': { source: 'iana' },
        'application/srgs': { source: 'iana', extensions: ['gram'] },
        'application/srgs+xml': { source: 'iana', extensions: ['grxml'] },
        'application/sru+xml': { source: 'iana', extensions: ['sru'] },
        'application/ssdl+xml': { source: 'apache', extensions: ['ssdl'] },
        'application/ssml+xml': { source: 'iana', extensions: ['ssml'] },
        'application/tamp-apex-update': { source: 'iana' },
        'application/tamp-apex-update-confirm': { source: 'iana' },
        'application/tamp-community-update': { source: 'iana' },
        'application/tamp-community-update-confirm': { source: 'iana' },
        'application/tamp-error': { source: 'iana' },
        'application/tamp-sequence-adjust': { source: 'iana' },
        'application/tamp-sequence-adjust-confirm': { source: 'iana' },
        'application/tamp-status-query': { source: 'iana' },
        'application/tamp-status-response': { source: 'iana' },
        'application/tamp-update': { source: 'iana' },
        'application/tamp-update-confirm': { source: 'iana' },
        'application/tar': { compressible: !0 },
        'application/tei+xml': {
          source: 'iana',
          extensions: ['tei', 'teicorpus'],
        },
        'application/thraud+xml': { source: 'iana', extensions: ['tfi'] },
        'application/timestamp-query': { source: 'iana' },
        'application/timestamp-reply': { source: 'iana' },
        'application/timestamped-data': { source: 'iana', extensions: ['tsd'] },
        'application/trig': { source: 'iana' },
        'application/ttml+xml': { source: 'iana' },
        'application/tve-trigger': { source: 'iana' },
        'application/ulpfec': { source: 'iana' },
        'application/urc-grpsheet+xml': { source: 'iana' },
        'application/urc-ressheet+xml': { source: 'iana' },
        'application/urc-targetdesc+xml': { source: 'iana' },
        'application/urc-uisocketdesc+xml': { source: 'iana' },
        'application/vcard+json': { source: 'iana', compressible: !0 },
        'application/vcard+xml': { source: 'iana' },
        'application/vemmi': { source: 'iana' },
        'application/vividence.scriptfile': { source: 'apache' },
        'application/vnd.1000minds.decision-model+xml': { source: 'iana' },
        'application/vnd.3gpp-prose+xml': { source: 'iana' },
        'application/vnd.3gpp-prose-pc3ch+xml': { source: 'iana' },
        'application/vnd.3gpp.access-transfer-events+xml': { source: 'iana' },
        'application/vnd.3gpp.bsf+xml': { source: 'iana' },
        'application/vnd.3gpp.gmop+xml': { source: 'iana' },
        'application/vnd.3gpp.mcptt-info+xml': { source: 'iana' },
        'application/vnd.3gpp.mcptt-mbms-usage-info+xml': { source: 'iana' },
        'application/vnd.3gpp.mid-call+xml': { source: 'iana' },
        'application/vnd.3gpp.pic-bw-large': {
          source: 'iana',
          extensions: ['plb'],
        },
        'application/vnd.3gpp.pic-bw-small': {
          source: 'iana',
          extensions: ['psb'],
        },
        'application/vnd.3gpp.pic-bw-var': {
          source: 'iana',
          extensions: ['pvb'],
        },
        'application/vnd.3gpp.sms': { source: 'iana' },
        'application/vnd.3gpp.sms+xml': { source: 'iana' },
        'application/vnd.3gpp.srvcc-ext+xml': { source: 'iana' },
        'application/vnd.3gpp.srvcc-info+xml': { source: 'iana' },
        'application/vnd.3gpp.state-and-event-info+xml': { source: 'iana' },
        'application/vnd.3gpp.ussd+xml': { source: 'iana' },
        'application/vnd.3gpp2.bcmcsinfo+xml': { source: 'iana' },
        'application/vnd.3gpp2.sms': { source: 'iana' },
        'application/vnd.3gpp2.tcap': { source: 'iana', extensions: ['tcap'] },
        'application/vnd.3lightssoftware.imagescal': { source: 'iana' },
        'application/vnd.3m.post-it-notes': {
          source: 'iana',
          extensions: ['pwn'],
        },
        'application/vnd.accpac.simply.aso': {
          source: 'iana',
          extensions: ['aso'],
        },
        'application/vnd.accpac.simply.imp': {
          source: 'iana',
          extensions: ['imp'],
        },
        'application/vnd.acucobol': { source: 'iana', extensions: ['acu'] },
        'application/vnd.acucorp': {
          source: 'iana',
          extensions: ['atc', 'acutc'],
        },
        'application/vnd.adobe.air-application-installer-package+zip': {
          source: 'apache',
          extensions: ['air'],
        },
        'application/vnd.adobe.flash.movie': { source: 'iana' },
        'application/vnd.adobe.formscentral.fcdt': {
          source: 'iana',
          extensions: ['fcdt'],
        },
        'application/vnd.adobe.fxp': {
          source: 'iana',
          extensions: ['fxp', 'fxpl'],
        },
        'application/vnd.adobe.partial-upload': { source: 'iana' },
        'application/vnd.adobe.xdp+xml': {
          source: 'iana',
          extensions: ['xdp'],
        },
        'application/vnd.adobe.xfdf': { source: 'iana', extensions: ['xfdf'] },
        'application/vnd.aether.imp': { source: 'iana' },
        'application/vnd.ah-barcode': { source: 'iana' },
        'application/vnd.ahead.space': {
          source: 'iana',
          extensions: ['ahead'],
        },
        'application/vnd.airzip.filesecure.azf': {
          source: 'iana',
          extensions: ['azf'],
        },
        'application/vnd.airzip.filesecure.azs': {
          source: 'iana',
          extensions: ['azs'],
        },
        'application/vnd.amazon.ebook': {
          source: 'apache',
          extensions: ['azw'],
        },
        'application/vnd.amazon.mobi8-ebook': { source: 'iana' },
        'application/vnd.americandynamics.acc': {
          source: 'iana',
          extensions: ['acc'],
        },
        'application/vnd.amiga.ami': { source: 'iana', extensions: ['ami'] },
        'application/vnd.amundsen.maze+xml': { source: 'iana' },
        'application/vnd.android.package-archive': {
          source: 'apache',
          compressible: !1,
          extensions: ['apk'],
        },
        'application/vnd.anki': { source: 'iana' },
        'application/vnd.anser-web-certificate-issue-initiation': {
          source: 'iana',
          extensions: ['cii'],
        },
        'application/vnd.anser-web-funds-transfer-initiation': {
          source: 'apache',
          extensions: ['fti'],
        },
        'application/vnd.antix.game-component': {
          source: 'iana',
          extensions: ['atx'],
        },
        'application/vnd.apache.thrift.binary': { source: 'iana' },
        'application/vnd.apache.thrift.compact': { source: 'iana' },
        'application/vnd.apache.thrift.json': { source: 'iana' },
        'application/vnd.api+json': { source: 'iana', compressible: !0 },
        'application/vnd.apothekende.reservation+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.apple.installer+xml': {
          source: 'iana',
          extensions: ['mpkg'],
        },
        'application/vnd.apple.mpegurl': {
          source: 'iana',
          extensions: ['m3u8'],
        },
        'application/vnd.apple.pkpass': {
          compressible: !1,
          extensions: ['pkpass'],
        },
        'application/vnd.arastra.swi': { source: 'iana' },
        'application/vnd.aristanetworks.swi': {
          source: 'iana',
          extensions: ['swi'],
        },
        'application/vnd.artsquare': { source: 'iana' },
        'application/vnd.astraea-software.iota': {
          source: 'iana',
          extensions: ['iota'],
        },
        'application/vnd.audiograph': { source: 'iana', extensions: ['aep'] },
        'application/vnd.autopackage': { source: 'iana' },
        'application/vnd.avistar+xml': { source: 'iana' },
        'application/vnd.balsamiq.bmml+xml': { source: 'iana' },
        'application/vnd.balsamiq.bmpr': { source: 'iana' },
        'application/vnd.bekitzur-stech+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.bint.med-content': { source: 'iana' },
        'application/vnd.biopax.rdf+xml': { source: 'iana' },
        'application/vnd.blink-idb-value-wrapper': { source: 'iana' },
        'application/vnd.blueice.multipass': {
          source: 'iana',
          extensions: ['mpm'],
        },
        'application/vnd.bluetooth.ep.oob': { source: 'iana' },
        'application/vnd.bluetooth.le.oob': { source: 'iana' },
        'application/vnd.bmi': { source: 'iana', extensions: ['bmi'] },
        'application/vnd.businessobjects': {
          source: 'iana',
          extensions: ['rep'],
        },
        'application/vnd.cab-jscript': { source: 'iana' },
        'application/vnd.canon-cpdl': { source: 'iana' },
        'application/vnd.canon-lips': { source: 'iana' },
        'application/vnd.capasystems-pg+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.cendio.thinlinc.clientconf': { source: 'iana' },
        'application/vnd.century-systems.tcp_stream': { source: 'iana' },
        'application/vnd.chemdraw+xml': {
          source: 'iana',
          extensions: ['cdxml'],
        },
        'application/vnd.chess-pgn': { source: 'iana' },
        'application/vnd.chipnuts.karaoke-mmd': {
          source: 'iana',
          extensions: ['mmd'],
        },
        'application/vnd.cinderella': { source: 'iana', extensions: ['cdy'] },
        'application/vnd.cirpack.isdn-ext': { source: 'iana' },
        'application/vnd.citationstyles.style+xml': { source: 'iana' },
        'application/vnd.claymore': { source: 'iana', extensions: ['cla'] },
        'application/vnd.cloanto.rp9': { source: 'iana', extensions: ['rp9'] },
        'application/vnd.clonk.c4group': {
          source: 'iana',
          extensions: ['c4g', 'c4d', 'c4f', 'c4p', 'c4u'],
        },
        'application/vnd.cluetrust.cartomobile-config': {
          source: 'iana',
          extensions: ['c11amc'],
        },
        'application/vnd.cluetrust.cartomobile-config-pkg': {
          source: 'iana',
          extensions: ['c11amz'],
        },
        'application/vnd.coffeescript': { source: 'iana' },
        'application/vnd.collection+json': { source: 'iana', compressible: !0 },
        'application/vnd.collection.doc+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.collection.next+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.comicbook+zip': { source: 'iana' },
        'application/vnd.commerce-battelle': { source: 'iana' },
        'application/vnd.commonspace': { source: 'iana', extensions: ['csp'] },
        'application/vnd.contact.cmsg': {
          source: 'iana',
          extensions: ['cdbcmsg'],
        },
        'application/vnd.coreos.ignition+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.cosmocaller': { source: 'iana', extensions: ['cmc'] },
        'application/vnd.crick.clicker': {
          source: 'iana',
          extensions: ['clkx'],
        },
        'application/vnd.crick.clicker.keyboard': {
          source: 'iana',
          extensions: ['clkk'],
        },
        'application/vnd.crick.clicker.palette': {
          source: 'iana',
          extensions: ['clkp'],
        },
        'application/vnd.crick.clicker.template': {
          source: 'iana',
          extensions: ['clkt'],
        },
        'application/vnd.crick.clicker.wordbank': {
          source: 'iana',
          extensions: ['clkw'],
        },
        'application/vnd.criticaltools.wbs+xml': {
          source: 'iana',
          extensions: ['wbs'],
        },
        'application/vnd.ctc-posml': { source: 'iana', extensions: ['pml'] },
        'application/vnd.ctct.ws+xml': { source: 'iana' },
        'application/vnd.cups-pdf': { source: 'iana' },
        'application/vnd.cups-postscript': { source: 'iana' },
        'application/vnd.cups-ppd': { source: 'iana', extensions: ['ppd'] },
        'application/vnd.cups-raster': { source: 'iana' },
        'application/vnd.cups-raw': { source: 'iana' },
        'application/vnd.curl': { source: 'iana' },
        'application/vnd.curl.car': { source: 'apache', extensions: ['car'] },
        'application/vnd.curl.pcurl': {
          source: 'apache',
          extensions: ['pcurl'],
        },
        'application/vnd.cyan.dean.root+xml': { source: 'iana' },
        'application/vnd.cybank': { source: 'iana' },
        'application/vnd.d2l.coursepackage1p0+zip': { source: 'iana' },
        'application/vnd.dart': {
          source: 'iana',
          compressible: !0,
          extensions: ['dart'],
        },
        'application/vnd.data-vision.rdz': {
          source: 'iana',
          extensions: ['rdz'],
        },
        'application/vnd.datapackage+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.dataresource+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.debian.binary-package': { source: 'iana' },
        'application/vnd.dece.data': {
          source: 'iana',
          extensions: ['uvf', 'uvvf', 'uvd', 'uvvd'],
        },
        'application/vnd.dece.ttml+xml': {
          source: 'iana',
          extensions: ['uvt', 'uvvt'],
        },
        'application/vnd.dece.unspecified': {
          source: 'iana',
          extensions: ['uvx', 'uvvx'],
        },
        'application/vnd.dece.zip': {
          source: 'iana',
          extensions: ['uvz', 'uvvz'],
        },
        'application/vnd.denovo.fcselayout-link': {
          source: 'iana',
          extensions: ['fe_launch'],
        },
        'application/vnd.desmume-movie': { source: 'iana' },
        'application/vnd.desmume.movie': { source: 'apache' },
        'application/vnd.dir-bi.plate-dl-nosuffix': { source: 'iana' },
        'application/vnd.dm.delegation+xml': { source: 'iana' },
        'application/vnd.dna': { source: 'iana', extensions: ['dna'] },
        'application/vnd.document+json': { source: 'iana', compressible: !0 },
        'application/vnd.dolby.mlp': { source: 'apache', extensions: ['mlp'] },
        'application/vnd.dolby.mobile.1': { source: 'iana' },
        'application/vnd.dolby.mobile.2': { source: 'iana' },
        'application/vnd.doremir.scorecloud-binary-document': {
          source: 'iana',
        },
        'application/vnd.dpgraph': { source: 'iana', extensions: ['dpg'] },
        'application/vnd.dreamfactory': {
          source: 'iana',
          extensions: ['dfac'],
        },
        'application/vnd.drive+json': { source: 'iana', compressible: !0 },
        'application/vnd.ds-keypoint': {
          source: 'apache',
          extensions: ['kpxx'],
        },
        'application/vnd.dtg.local': { source: 'iana' },
        'application/vnd.dtg.local.flash': { source: 'iana' },
        'application/vnd.dtg.local.html': { source: 'iana' },
        'application/vnd.dvb.ait': { source: 'iana', extensions: ['ait'] },
        'application/vnd.dvb.dvbj': { source: 'iana' },
        'application/vnd.dvb.esgcontainer': { source: 'iana' },
        'application/vnd.dvb.ipdcdftnotifaccess': { source: 'iana' },
        'application/vnd.dvb.ipdcesgaccess': { source: 'iana' },
        'application/vnd.dvb.ipdcesgaccess2': { source: 'iana' },
        'application/vnd.dvb.ipdcesgpdd': { source: 'iana' },
        'application/vnd.dvb.ipdcroaming': { source: 'iana' },
        'application/vnd.dvb.iptv.alfec-base': { source: 'iana' },
        'application/vnd.dvb.iptv.alfec-enhancement': { source: 'iana' },
        'application/vnd.dvb.notif-aggregate-root+xml': { source: 'iana' },
        'application/vnd.dvb.notif-container+xml': { source: 'iana' },
        'application/vnd.dvb.notif-generic+xml': { source: 'iana' },
        'application/vnd.dvb.notif-ia-msglist+xml': { source: 'iana' },
        'application/vnd.dvb.notif-ia-registration-request+xml': {
          source: 'iana',
        },
        'application/vnd.dvb.notif-ia-registration-response+xml': {
          source: 'iana',
        },
        'application/vnd.dvb.notif-init+xml': { source: 'iana' },
        'application/vnd.dvb.pfr': { source: 'iana' },
        'application/vnd.dvb.service': { source: 'iana', extensions: ['svc'] },
        'application/vnd.dxr': { source: 'iana' },
        'application/vnd.dynageo': { source: 'iana', extensions: ['geo'] },
        'application/vnd.dzr': { source: 'iana' },
        'application/vnd.easykaraoke.cdgdownload': { source: 'iana' },
        'application/vnd.ecdis-update': { source: 'iana' },
        'application/vnd.ecowin.chart': { source: 'iana', extensions: ['mag'] },
        'application/vnd.ecowin.filerequest': { source: 'iana' },
        'application/vnd.ecowin.fileupdate': { source: 'iana' },
        'application/vnd.ecowin.series': { source: 'iana' },
        'application/vnd.ecowin.seriesrequest': { source: 'iana' },
        'application/vnd.ecowin.seriesupdate': { source: 'iana' },
        'application/vnd.efi.img': { source: 'iana' },
        'application/vnd.efi.iso': { source: 'iana' },
        'application/vnd.emclient.accessrequest+xml': { source: 'iana' },
        'application/vnd.enliven': { source: 'iana', extensions: ['nml'] },
        'application/vnd.enphase.envoy': { source: 'iana' },
        'application/vnd.eprints.data+xml': { source: 'iana' },
        'application/vnd.epson.esf': { source: 'iana', extensions: ['esf'] },
        'application/vnd.epson.msf': { source: 'iana', extensions: ['msf'] },
        'application/vnd.epson.quickanime': {
          source: 'iana',
          extensions: ['qam'],
        },
        'application/vnd.epson.salt': { source: 'iana', extensions: ['slt'] },
        'application/vnd.epson.ssf': { source: 'iana', extensions: ['ssf'] },
        'application/vnd.ericsson.quickcall': { source: 'iana' },
        'application/vnd.espass-espass+zip': { source: 'iana' },
        'application/vnd.eszigno3+xml': {
          source: 'iana',
          extensions: ['es3', 'et3'],
        },
        'application/vnd.etsi.aoc+xml': { source: 'iana' },
        'application/vnd.etsi.asic-e+zip': { source: 'iana' },
        'application/vnd.etsi.asic-s+zip': { source: 'iana' },
        'application/vnd.etsi.cug+xml': { source: 'iana' },
        'application/vnd.etsi.iptvcommand+xml': { source: 'iana' },
        'application/vnd.etsi.iptvdiscovery+xml': { source: 'iana' },
        'application/vnd.etsi.iptvprofile+xml': { source: 'iana' },
        'application/vnd.etsi.iptvsad-bc+xml': { source: 'iana' },
        'application/vnd.etsi.iptvsad-cod+xml': { source: 'iana' },
        'application/vnd.etsi.iptvsad-npvr+xml': { source: 'iana' },
        'application/vnd.etsi.iptvservice+xml': { source: 'iana' },
        'application/vnd.etsi.iptvsync+xml': { source: 'iana' },
        'application/vnd.etsi.iptvueprofile+xml': { source: 'iana' },
        'application/vnd.etsi.mcid+xml': { source: 'iana' },
        'application/vnd.etsi.mheg5': { source: 'iana' },
        'application/vnd.etsi.overload-control-policy-dataset+xml': {
          source: 'iana',
        },
        'application/vnd.etsi.pstn+xml': { source: 'iana' },
        'application/vnd.etsi.sci+xml': { source: 'iana' },
        'application/vnd.etsi.simservs+xml': { source: 'iana' },
        'application/vnd.etsi.timestamp-token': { source: 'iana' },
        'application/vnd.etsi.tsl+xml': { source: 'iana' },
        'application/vnd.etsi.tsl.der': { source: 'iana' },
        'application/vnd.eudora.data': { source: 'iana' },
        'application/vnd.evolv.ecig.profile': { source: 'iana' },
        'application/vnd.evolv.ecig.settings': { source: 'iana' },
        'application/vnd.evolv.ecig.theme': { source: 'iana' },
        'application/vnd.ezpix-album': { source: 'iana', extensions: ['ez2'] },
        'application/vnd.ezpix-package': {
          source: 'iana',
          extensions: ['ez3'],
        },
        'application/vnd.f-secure.mobile': { source: 'iana' },
        'application/vnd.fastcopy-disk-image': { source: 'iana' },
        'application/vnd.fdf': { source: 'iana', extensions: ['fdf'] },
        'application/vnd.fdsn.mseed': { source: 'iana', extensions: ['mseed'] },
        'application/vnd.fdsn.seed': {
          source: 'iana',
          extensions: ['seed', 'dataless'],
        },
        'application/vnd.ffsns': { source: 'iana' },
        'application/vnd.filmit.zfc': { source: 'iana' },
        'application/vnd.fints': { source: 'iana' },
        'application/vnd.firemonkeys.cloudcell': { source: 'iana' },
        'application/vnd.flographit': { source: 'iana', extensions: ['gph'] },
        'application/vnd.fluxtime.clip': {
          source: 'iana',
          extensions: ['ftc'],
        },
        'application/vnd.font-fontforge-sfd': { source: 'iana' },
        'application/vnd.framemaker': {
          source: 'iana',
          extensions: ['fm', 'frame', 'maker', 'book'],
        },
        'application/vnd.frogans.fnc': { source: 'iana', extensions: ['fnc'] },
        'application/vnd.frogans.ltf': { source: 'iana', extensions: ['ltf'] },
        'application/vnd.fsc.weblaunch': {
          source: 'iana',
          extensions: ['fsc'],
        },
        'application/vnd.fujitsu.oasys': {
          source: 'iana',
          extensions: ['oas'],
        },
        'application/vnd.fujitsu.oasys2': {
          source: 'iana',
          extensions: ['oa2'],
        },
        'application/vnd.fujitsu.oasys3': {
          source: 'iana',
          extensions: ['oa3'],
        },
        'application/vnd.fujitsu.oasysgp': {
          source: 'iana',
          extensions: ['fg5'],
        },
        'application/vnd.fujitsu.oasysprs': {
          source: 'iana',
          extensions: ['bh2'],
        },
        'application/vnd.fujixerox.art-ex': { source: 'iana' },
        'application/vnd.fujixerox.art4': { source: 'iana' },
        'application/vnd.fujixerox.ddd': {
          source: 'iana',
          extensions: ['ddd'],
        },
        'application/vnd.fujixerox.docuworks': {
          source: 'iana',
          extensions: ['xdw'],
        },
        'application/vnd.fujixerox.docuworks.binder': {
          source: 'iana',
          extensions: ['xbd'],
        },
        'application/vnd.fujixerox.docuworks.container': { source: 'iana' },
        'application/vnd.fujixerox.hbpl': { source: 'iana' },
        'application/vnd.fut-misnet': { source: 'iana' },
        'application/vnd.fuzzysheet': { source: 'iana', extensions: ['fzs'] },
        'application/vnd.genomatix.tuxedo': {
          source: 'iana',
          extensions: ['txd'],
        },
        'application/vnd.geo+json': { source: 'iana', compressible: !0 },
        'application/vnd.geocube+xml': { source: 'iana' },
        'application/vnd.geogebra.file': {
          source: 'iana',
          extensions: ['ggb'],
        },
        'application/vnd.geogebra.tool': {
          source: 'iana',
          extensions: ['ggt'],
        },
        'application/vnd.geometry-explorer': {
          source: 'iana',
          extensions: ['gex', 'gre'],
        },
        'application/vnd.geonext': { source: 'iana', extensions: ['gxt'] },
        'application/vnd.geoplan': { source: 'iana', extensions: ['g2w'] },
        'application/vnd.geospace': { source: 'iana', extensions: ['g3w'] },
        'application/vnd.gerber': { source: 'iana' },
        'application/vnd.globalplatform.card-content-mgt': { source: 'iana' },
        'application/vnd.globalplatform.card-content-mgt-response': {
          source: 'iana',
        },
        'application/vnd.gmx': { source: 'iana', extensions: ['gmx'] },
        'application/vnd.google-apps.document': {
          compressible: !1,
          extensions: ['gdoc'],
        },
        'application/vnd.google-apps.presentation': {
          compressible: !1,
          extensions: ['gslides'],
        },
        'application/vnd.google-apps.spreadsheet': {
          compressible: !1,
          extensions: ['gsheet'],
        },
        'application/vnd.google-earth.kml+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['kml'],
        },
        'application/vnd.google-earth.kmz': {
          source: 'iana',
          compressible: !1,
          extensions: ['kmz'],
        },
        'application/vnd.gov.sk.e-form+xml': { source: 'iana' },
        'application/vnd.gov.sk.e-form+zip': { source: 'iana' },
        'application/vnd.gov.sk.xmldatacontainer+xml': { source: 'iana' },
        'application/vnd.grafeq': {
          source: 'iana',
          extensions: ['gqf', 'gqs'],
        },
        'application/vnd.gridmp': { source: 'iana' },
        'application/vnd.groove-account': {
          source: 'iana',
          extensions: ['gac'],
        },
        'application/vnd.groove-help': { source: 'iana', extensions: ['ghf'] },
        'application/vnd.groove-identity-message': {
          source: 'iana',
          extensions: ['gim'],
        },
        'application/vnd.groove-injector': {
          source: 'iana',
          extensions: ['grv'],
        },
        'application/vnd.groove-tool-message': {
          source: 'iana',
          extensions: ['gtm'],
        },
        'application/vnd.groove-tool-template': {
          source: 'iana',
          extensions: ['tpl'],
        },
        'application/vnd.groove-vcard': { source: 'iana', extensions: ['vcg'] },
        'application/vnd.hal+json': { source: 'iana', compressible: !0 },
        'application/vnd.hal+xml': { source: 'iana', extensions: ['hal'] },
        'application/vnd.handheld-entertainment+xml': {
          source: 'iana',
          extensions: ['zmm'],
        },
        'application/vnd.hbci': { source: 'iana', extensions: ['hbci'] },
        'application/vnd.hc+json': { source: 'iana', compressible: !0 },
        'application/vnd.hcl-bireports': { source: 'iana' },
        'application/vnd.hdt': { source: 'iana' },
        'application/vnd.heroku+json': { source: 'iana', compressible: !0 },
        'application/vnd.hhe.lesson-player': {
          source: 'iana',
          extensions: ['les'],
        },
        'application/vnd.hp-hpgl': { source: 'iana', extensions: ['hpgl'] },
        'application/vnd.hp-hpid': { source: 'iana', extensions: ['hpid'] },
        'application/vnd.hp-hps': { source: 'iana', extensions: ['hps'] },
        'application/vnd.hp-jlyt': { source: 'iana', extensions: ['jlt'] },
        'application/vnd.hp-pcl': { source: 'iana', extensions: ['pcl'] },
        'application/vnd.hp-pclxl': { source: 'iana', extensions: ['pclxl'] },
        'application/vnd.httphone': { source: 'iana' },
        'application/vnd.hydrostatix.sof-data': {
          source: 'iana',
          extensions: ['sfd-hdstx'],
        },
        'application/vnd.hyper-item+json': { source: 'iana', compressible: !0 },
        'application/vnd.hyperdrive+json': { source: 'iana', compressible: !0 },
        'application/vnd.hzn-3d-crossword': { source: 'iana' },
        'application/vnd.ibm.afplinedata': { source: 'iana' },
        'application/vnd.ibm.electronic-media': { source: 'iana' },
        'application/vnd.ibm.minipay': { source: 'iana', extensions: ['mpy'] },
        'application/vnd.ibm.modcap': {
          source: 'iana',
          extensions: ['afp', 'listafp', 'list3820'],
        },
        'application/vnd.ibm.rights-management': {
          source: 'iana',
          extensions: ['irm'],
        },
        'application/vnd.ibm.secure-container': {
          source: 'iana',
          extensions: ['sc'],
        },
        'application/vnd.iccprofile': {
          source: 'iana',
          extensions: ['icc', 'icm'],
        },
        'application/vnd.ieee.1905': { source: 'iana' },
        'application/vnd.igloader': { source: 'iana', extensions: ['igl'] },
        'application/vnd.imagemeter.folder+zip': { source: 'iana' },
        'application/vnd.imagemeter.image+zip': { source: 'iana' },
        'application/vnd.immervision-ivp': {
          source: 'iana',
          extensions: ['ivp'],
        },
        'application/vnd.immervision-ivu': {
          source: 'iana',
          extensions: ['ivu'],
        },
        'application/vnd.ims.imsccv1p1': { source: 'iana' },
        'application/vnd.ims.imsccv1p2': { source: 'iana' },
        'application/vnd.ims.imsccv1p3': { source: 'iana' },
        'application/vnd.ims.lis.v2.result+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.ims.lti.v2.toolconsumerprofile+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.ims.lti.v2.toolproxy+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.ims.lti.v2.toolproxy.id+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.ims.lti.v2.toolsettings+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.ims.lti.v2.toolsettings.simple+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.informedcontrol.rms+xml': { source: 'iana' },
        'application/vnd.informix-visionary': { source: 'iana' },
        'application/vnd.infotech.project': { source: 'iana' },
        'application/vnd.infotech.project+xml': { source: 'iana' },
        'application/vnd.innopath.wamp.notification': { source: 'iana' },
        'application/vnd.insors.igm': { source: 'iana', extensions: ['igm'] },
        'application/vnd.intercon.formnet': {
          source: 'iana',
          extensions: ['xpw', 'xpx'],
        },
        'application/vnd.intergeo': { source: 'iana', extensions: ['i2g'] },
        'application/vnd.intertrust.digibox': { source: 'iana' },
        'application/vnd.intertrust.nncp': { source: 'iana' },
        'application/vnd.intu.qbo': { source: 'iana', extensions: ['qbo'] },
        'application/vnd.intu.qfx': { source: 'iana', extensions: ['qfx'] },
        'application/vnd.iptc.g2.catalogitem+xml': { source: 'iana' },
        'application/vnd.iptc.g2.conceptitem+xml': { source: 'iana' },
        'application/vnd.iptc.g2.knowledgeitem+xml': { source: 'iana' },
        'application/vnd.iptc.g2.newsitem+xml': { source: 'iana' },
        'application/vnd.iptc.g2.newsmessage+xml': { source: 'iana' },
        'application/vnd.iptc.g2.packageitem+xml': { source: 'iana' },
        'application/vnd.iptc.g2.planningitem+xml': { source: 'iana' },
        'application/vnd.ipunplugged.rcprofile': {
          source: 'iana',
          extensions: ['rcprofile'],
        },
        'application/vnd.irepository.package+xml': {
          source: 'iana',
          extensions: ['irp'],
        },
        'application/vnd.is-xpr': { source: 'iana', extensions: ['xpr'] },
        'application/vnd.isac.fcs': { source: 'iana', extensions: ['fcs'] },
        'application/vnd.jam': { source: 'iana', extensions: ['jam'] },
        'application/vnd.japannet-directory-service': { source: 'iana' },
        'application/vnd.japannet-jpnstore-wakeup': { source: 'iana' },
        'application/vnd.japannet-payment-wakeup': { source: 'iana' },
        'application/vnd.japannet-registration': { source: 'iana' },
        'application/vnd.japannet-registration-wakeup': { source: 'iana' },
        'application/vnd.japannet-setstore-wakeup': { source: 'iana' },
        'application/vnd.japannet-verification': { source: 'iana' },
        'application/vnd.japannet-verification-wakeup': { source: 'iana' },
        'application/vnd.jcp.javame.midlet-rms': {
          source: 'iana',
          extensions: ['rms'],
        },
        'application/vnd.jisp': { source: 'iana', extensions: ['jisp'] },
        'application/vnd.joost.joda-archive': {
          source: 'iana',
          extensions: ['joda'],
        },
        'application/vnd.jsk.isdn-ngn': { source: 'iana' },
        'application/vnd.kahootz': {
          source: 'iana',
          extensions: ['ktz', 'ktr'],
        },
        'application/vnd.kde.karbon': {
          source: 'iana',
          extensions: ['karbon'],
        },
        'application/vnd.kde.kchart': { source: 'iana', extensions: ['chrt'] },
        'application/vnd.kde.kformula': { source: 'iana', extensions: ['kfo'] },
        'application/vnd.kde.kivio': { source: 'iana', extensions: ['flw'] },
        'application/vnd.kde.kontour': { source: 'iana', extensions: ['kon'] },
        'application/vnd.kde.kpresenter': {
          source: 'iana',
          extensions: ['kpr', 'kpt'],
        },
        'application/vnd.kde.kspread': { source: 'iana', extensions: ['ksp'] },
        'application/vnd.kde.kword': {
          source: 'iana',
          extensions: ['kwd', 'kwt'],
        },
        'application/vnd.kenameaapp': { source: 'iana', extensions: ['htke'] },
        'application/vnd.kidspiration': { source: 'iana', extensions: ['kia'] },
        'application/vnd.kinar': { source: 'iana', extensions: ['kne', 'knp'] },
        'application/vnd.koan': {
          source: 'iana',
          extensions: ['skp', 'skd', 'skt', 'skm'],
        },
        'application/vnd.kodak-descriptor': {
          source: 'iana',
          extensions: ['sse'],
        },
        'application/vnd.las.las+json': { source: 'iana', compressible: !0 },
        'application/vnd.las.las+xml': {
          source: 'iana',
          extensions: ['lasxml'],
        },
        'application/vnd.liberty-request+xml': { source: 'iana' },
        'application/vnd.llamagraphics.life-balance.desktop': {
          source: 'iana',
          extensions: ['lbd'],
        },
        'application/vnd.llamagraphics.life-balance.exchange+xml': {
          source: 'iana',
          extensions: ['lbe'],
        },
        'application/vnd.lotus-1-2-3': { source: 'iana', extensions: ['123'] },
        'application/vnd.lotus-approach': {
          source: 'iana',
          extensions: ['apr'],
        },
        'application/vnd.lotus-freelance': {
          source: 'iana',
          extensions: ['pre'],
        },
        'application/vnd.lotus-notes': { source: 'iana', extensions: ['nsf'] },
        'application/vnd.lotus-organizer': {
          source: 'iana',
          extensions: ['org'],
        },
        'application/vnd.lotus-screencam': {
          source: 'iana',
          extensions: ['scm'],
        },
        'application/vnd.lotus-wordpro': {
          source: 'iana',
          extensions: ['lwp'],
        },
        'application/vnd.macports.portpkg': {
          source: 'iana',
          extensions: ['portpkg'],
        },
        'application/vnd.mapbox-vector-tile': { source: 'iana' },
        'application/vnd.marlin.drm.actiontoken+xml': { source: 'iana' },
        'application/vnd.marlin.drm.conftoken+xml': { source: 'iana' },
        'application/vnd.marlin.drm.license+xml': { source: 'iana' },
        'application/vnd.marlin.drm.mdcf': { source: 'iana' },
        'application/vnd.mason+json': { source: 'iana', compressible: !0 },
        'application/vnd.maxmind.maxmind-db': { source: 'iana' },
        'application/vnd.mcd': { source: 'iana', extensions: ['mcd'] },
        'application/vnd.medcalcdata': { source: 'iana', extensions: ['mc1'] },
        'application/vnd.mediastation.cdkey': {
          source: 'iana',
          extensions: ['cdkey'],
        },
        'application/vnd.meridian-slingshot': { source: 'iana' },
        'application/vnd.mfer': { source: 'iana', extensions: ['mwf'] },
        'application/vnd.mfmp': { source: 'iana', extensions: ['mfm'] },
        'application/vnd.micro+json': { source: 'iana', compressible: !0 },
        'application/vnd.micrografx.flo': {
          source: 'iana',
          extensions: ['flo'],
        },
        'application/vnd.micrografx.igx': {
          source: 'iana',
          extensions: ['igx'],
        },
        'application/vnd.microsoft.portable-executable': { source: 'iana' },
        'application/vnd.microsoft.windows.thumbnail-cache': { source: 'iana' },
        'application/vnd.miele+json': { source: 'iana', compressible: !0 },
        'application/vnd.mif': { source: 'iana', extensions: ['mif'] },
        'application/vnd.minisoft-hp3000-save': { source: 'iana' },
        'application/vnd.mitsubishi.misty-guard.trustweb': { source: 'iana' },
        'application/vnd.mobius.daf': { source: 'iana', extensions: ['daf'] },
        'application/vnd.mobius.dis': { source: 'iana', extensions: ['dis'] },
        'application/vnd.mobius.mbk': { source: 'iana', extensions: ['mbk'] },
        'application/vnd.mobius.mqy': { source: 'iana', extensions: ['mqy'] },
        'application/vnd.mobius.msl': { source: 'iana', extensions: ['msl'] },
        'application/vnd.mobius.plc': { source: 'iana', extensions: ['plc'] },
        'application/vnd.mobius.txf': { source: 'iana', extensions: ['txf'] },
        'application/vnd.mophun.application': {
          source: 'iana',
          extensions: ['mpn'],
        },
        'application/vnd.mophun.certificate': {
          source: 'iana',
          extensions: ['mpc'],
        },
        'application/vnd.motorola.flexsuite': { source: 'iana' },
        'application/vnd.motorola.flexsuite.adsi': { source: 'iana' },
        'application/vnd.motorola.flexsuite.fis': { source: 'iana' },
        'application/vnd.motorola.flexsuite.gotap': { source: 'iana' },
        'application/vnd.motorola.flexsuite.kmr': { source: 'iana' },
        'application/vnd.motorola.flexsuite.ttc': { source: 'iana' },
        'application/vnd.motorola.flexsuite.wem': { source: 'iana' },
        'application/vnd.motorola.iprm': { source: 'iana' },
        'application/vnd.mozilla.xul+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['xul'],
        },
        'application/vnd.ms-3mfdocument': { source: 'iana' },
        'application/vnd.ms-artgalry': { source: 'iana', extensions: ['cil'] },
        'application/vnd.ms-asf': { source: 'iana' },
        'application/vnd.ms-cab-compressed': {
          source: 'iana',
          extensions: ['cab'],
        },
        'application/vnd.ms-color.iccprofile': { source: 'apache' },
        'application/vnd.ms-excel': {
          source: 'iana',
          compressible: !1,
          extensions: ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw'],
        },
        'application/vnd.ms-excel.addin.macroenabled.12': {
          source: 'iana',
          extensions: ['xlam'],
        },
        'application/vnd.ms-excel.sheet.binary.macroenabled.12': {
          source: 'iana',
          extensions: ['xlsb'],
        },
        'application/vnd.ms-excel.sheet.macroenabled.12': {
          source: 'iana',
          extensions: ['xlsm'],
        },
        'application/vnd.ms-excel.template.macroenabled.12': {
          source: 'iana',
          extensions: ['xltm'],
        },
        'application/vnd.ms-fontobject': {
          source: 'iana',
          compressible: !0,
          extensions: ['eot'],
        },
        'application/vnd.ms-htmlhelp': { source: 'iana', extensions: ['chm'] },
        'application/vnd.ms-ims': { source: 'iana', extensions: ['ims'] },
        'application/vnd.ms-lrm': { source: 'iana', extensions: ['lrm'] },
        'application/vnd.ms-office.activex+xml': { source: 'iana' },
        'application/vnd.ms-officetheme': {
          source: 'iana',
          extensions: ['thmx'],
        },
        'application/vnd.ms-opentype': { source: 'apache', compressible: !0 },
        'application/vnd.ms-outlook': { compressible: !1, extensions: ['msg'] },
        'application/vnd.ms-package.obfuscated-opentype': { source: 'apache' },
        'application/vnd.ms-pki.seccat': {
          source: 'apache',
          extensions: ['cat'],
        },
        'application/vnd.ms-pki.stl': { source: 'apache', extensions: ['stl'] },
        'application/vnd.ms-playready.initiator+xml': { source: 'iana' },
        'application/vnd.ms-powerpoint': {
          source: 'iana',
          compressible: !1,
          extensions: ['ppt', 'pps', 'pot'],
        },
        'application/vnd.ms-powerpoint.addin.macroenabled.12': {
          source: 'iana',
          extensions: ['ppam'],
        },
        'application/vnd.ms-powerpoint.presentation.macroenabled.12': {
          source: 'iana',
          extensions: ['pptm'],
        },
        'application/vnd.ms-powerpoint.slide.macroenabled.12': {
          source: 'iana',
          extensions: ['sldm'],
        },
        'application/vnd.ms-powerpoint.slideshow.macroenabled.12': {
          source: 'iana',
          extensions: ['ppsm'],
        },
        'application/vnd.ms-powerpoint.template.macroenabled.12': {
          source: 'iana',
          extensions: ['potm'],
        },
        'application/vnd.ms-printdevicecapabilities+xml': { source: 'iana' },
        'application/vnd.ms-printing.printticket+xml': { source: 'apache' },
        'application/vnd.ms-printschematicket+xml': { source: 'iana' },
        'application/vnd.ms-project': {
          source: 'iana',
          extensions: ['mpp', 'mpt'],
        },
        'application/vnd.ms-tnef': { source: 'iana' },
        'application/vnd.ms-windows.devicepairing': { source: 'iana' },
        'application/vnd.ms-windows.nwprinting.oob': { source: 'iana' },
        'application/vnd.ms-windows.printerpairing': { source: 'iana' },
        'application/vnd.ms-windows.wsd.oob': { source: 'iana' },
        'application/vnd.ms-wmdrm.lic-chlg-req': { source: 'iana' },
        'application/vnd.ms-wmdrm.lic-resp': { source: 'iana' },
        'application/vnd.ms-wmdrm.meter-chlg-req': { source: 'iana' },
        'application/vnd.ms-wmdrm.meter-resp': { source: 'iana' },
        'application/vnd.ms-word.document.macroenabled.12': {
          source: 'iana',
          extensions: ['docm'],
        },
        'application/vnd.ms-word.template.macroenabled.12': {
          source: 'iana',
          extensions: ['dotm'],
        },
        'application/vnd.ms-works': {
          source: 'iana',
          extensions: ['wps', 'wks', 'wcm', 'wdb'],
        },
        'application/vnd.ms-wpl': { source: 'iana', extensions: ['wpl'] },
        'application/vnd.ms-xpsdocument': {
          source: 'iana',
          compressible: !1,
          extensions: ['xps'],
        },
        'application/vnd.msa-disk-image': { source: 'iana' },
        'application/vnd.mseq': { source: 'iana', extensions: ['mseq'] },
        'application/vnd.msign': { source: 'iana' },
        'application/vnd.multiad.creator': { source: 'iana' },
        'application/vnd.multiad.creator.cif': { source: 'iana' },
        'application/vnd.music-niff': { source: 'iana' },
        'application/vnd.musician': { source: 'iana', extensions: ['mus'] },
        'application/vnd.muvee.style': { source: 'iana', extensions: ['msty'] },
        'application/vnd.mynfc': { source: 'iana', extensions: ['taglet'] },
        'application/vnd.ncd.control': { source: 'iana' },
        'application/vnd.ncd.reference': { source: 'iana' },
        'application/vnd.nearst.inv+json': { source: 'iana', compressible: !0 },
        'application/vnd.nervana': { source: 'iana' },
        'application/vnd.netfpx': { source: 'iana' },
        'application/vnd.neurolanguage.nlu': {
          source: 'iana',
          extensions: ['nlu'],
        },
        'application/vnd.nintendo.nitro.rom': { source: 'iana' },
        'application/vnd.nintendo.snes.rom': { source: 'iana' },
        'application/vnd.nitf': { source: 'iana', extensions: ['ntf', 'nitf'] },
        'application/vnd.noblenet-directory': {
          source: 'iana',
          extensions: ['nnd'],
        },
        'application/vnd.noblenet-sealer': {
          source: 'iana',
          extensions: ['nns'],
        },
        'application/vnd.noblenet-web': { source: 'iana', extensions: ['nnw'] },
        'application/vnd.nokia.catalogs': { source: 'iana' },
        'application/vnd.nokia.conml+wbxml': { source: 'iana' },
        'application/vnd.nokia.conml+xml': { source: 'iana' },
        'application/vnd.nokia.iptv.config+xml': { source: 'iana' },
        'application/vnd.nokia.isds-radio-presets': { source: 'iana' },
        'application/vnd.nokia.landmark+wbxml': { source: 'iana' },
        'application/vnd.nokia.landmark+xml': { source: 'iana' },
        'application/vnd.nokia.landmarkcollection+xml': { source: 'iana' },
        'application/vnd.nokia.n-gage.ac+xml': { source: 'iana' },
        'application/vnd.nokia.n-gage.data': {
          source: 'iana',
          extensions: ['ngdat'],
        },
        'application/vnd.nokia.n-gage.symbian.install': {
          source: 'iana',
          extensions: ['n-gage'],
        },
        'application/vnd.nokia.ncd': { source: 'iana' },
        'application/vnd.nokia.pcd+wbxml': { source: 'iana' },
        'application/vnd.nokia.pcd+xml': { source: 'iana' },
        'application/vnd.nokia.radio-preset': {
          source: 'iana',
          extensions: ['rpst'],
        },
        'application/vnd.nokia.radio-presets': {
          source: 'iana',
          extensions: ['rpss'],
        },
        'application/vnd.novadigm.edm': { source: 'iana', extensions: ['edm'] },
        'application/vnd.novadigm.edx': { source: 'iana', extensions: ['edx'] },
        'application/vnd.novadigm.ext': { source: 'iana', extensions: ['ext'] },
        'application/vnd.ntt-local.content-share': { source: 'iana' },
        'application/vnd.ntt-local.file-transfer': { source: 'iana' },
        'application/vnd.ntt-local.ogw_remote-access': { source: 'iana' },
        'application/vnd.ntt-local.sip-ta_remote': { source: 'iana' },
        'application/vnd.ntt-local.sip-ta_tcp_stream': { source: 'iana' },
        'application/vnd.oasis.opendocument.chart': {
          source: 'iana',
          extensions: ['odc'],
        },
        'application/vnd.oasis.opendocument.chart-template': {
          source: 'iana',
          extensions: ['otc'],
        },
        'application/vnd.oasis.opendocument.database': {
          source: 'iana',
          extensions: ['odb'],
        },
        'application/vnd.oasis.opendocument.formula': {
          source: 'iana',
          extensions: ['odf'],
        },
        'application/vnd.oasis.opendocument.formula-template': {
          source: 'iana',
          extensions: ['odft'],
        },
        'application/vnd.oasis.opendocument.graphics': {
          source: 'iana',
          compressible: !1,
          extensions: ['odg'],
        },
        'application/vnd.oasis.opendocument.graphics-template': {
          source: 'iana',
          extensions: ['otg'],
        },
        'application/vnd.oasis.opendocument.image': {
          source: 'iana',
          extensions: ['odi'],
        },
        'application/vnd.oasis.opendocument.image-template': {
          source: 'iana',
          extensions: ['oti'],
        },
        'application/vnd.oasis.opendocument.presentation': {
          source: 'iana',
          compressible: !1,
          extensions: ['odp'],
        },
        'application/vnd.oasis.opendocument.presentation-template': {
          source: 'iana',
          extensions: ['otp'],
        },
        'application/vnd.oasis.opendocument.spreadsheet': {
          source: 'iana',
          compressible: !1,
          extensions: ['ods'],
        },
        'application/vnd.oasis.opendocument.spreadsheet-template': {
          source: 'iana',
          extensions: ['ots'],
        },
        'application/vnd.oasis.opendocument.text': {
          source: 'iana',
          compressible: !1,
          extensions: ['odt'],
        },
        'application/vnd.oasis.opendocument.text-master': {
          source: 'iana',
          extensions: ['odm'],
        },
        'application/vnd.oasis.opendocument.text-template': {
          source: 'iana',
          extensions: ['ott'],
        },
        'application/vnd.oasis.opendocument.text-web': {
          source: 'iana',
          extensions: ['oth'],
        },
        'application/vnd.obn': { source: 'iana' },
        'application/vnd.ocf+cbor': { source: 'iana' },
        'application/vnd.oftn.l10n+json': { source: 'iana', compressible: !0 },
        'application/vnd.oipf.contentaccessdownload+xml': { source: 'iana' },
        'application/vnd.oipf.contentaccessstreaming+xml': { source: 'iana' },
        'application/vnd.oipf.cspg-hexbinary': { source: 'iana' },
        'application/vnd.oipf.dae.svg+xml': { source: 'iana' },
        'application/vnd.oipf.dae.xhtml+xml': { source: 'iana' },
        'application/vnd.oipf.mippvcontrolmessage+xml': { source: 'iana' },
        'application/vnd.oipf.pae.gem': { source: 'iana' },
        'application/vnd.oipf.spdiscovery+xml': { source: 'iana' },
        'application/vnd.oipf.spdlist+xml': { source: 'iana' },
        'application/vnd.oipf.ueprofile+xml': { source: 'iana' },
        'application/vnd.oipf.userprofile+xml': { source: 'iana' },
        'application/vnd.olpc-sugar': { source: 'iana', extensions: ['xo'] },
        'application/vnd.oma-scws-config': { source: 'iana' },
        'application/vnd.oma-scws-http-request': { source: 'iana' },
        'application/vnd.oma-scws-http-response': { source: 'iana' },
        'application/vnd.oma.bcast.associated-procedure-parameter+xml': {
          source: 'iana',
        },
        'application/vnd.oma.bcast.drm-trigger+xml': { source: 'iana' },
        'application/vnd.oma.bcast.imd+xml': { source: 'iana' },
        'application/vnd.oma.bcast.ltkm': { source: 'iana' },
        'application/vnd.oma.bcast.notification+xml': { source: 'iana' },
        'application/vnd.oma.bcast.provisioningtrigger': { source: 'iana' },
        'application/vnd.oma.bcast.sgboot': { source: 'iana' },
        'application/vnd.oma.bcast.sgdd+xml': { source: 'iana' },
        'application/vnd.oma.bcast.sgdu': { source: 'iana' },
        'application/vnd.oma.bcast.simple-symbol-container': { source: 'iana' },
        'application/vnd.oma.bcast.smartcard-trigger+xml': { source: 'iana' },
        'application/vnd.oma.bcast.sprov+xml': { source: 'iana' },
        'application/vnd.oma.bcast.stkm': { source: 'iana' },
        'application/vnd.oma.cab-address-book+xml': { source: 'iana' },
        'application/vnd.oma.cab-feature-handler+xml': { source: 'iana' },
        'application/vnd.oma.cab-pcc+xml': { source: 'iana' },
        'application/vnd.oma.cab-subs-invite+xml': { source: 'iana' },
        'application/vnd.oma.cab-user-prefs+xml': { source: 'iana' },
        'application/vnd.oma.dcd': { source: 'iana' },
        'application/vnd.oma.dcdc': { source: 'iana' },
        'application/vnd.oma.dd2+xml': { source: 'iana', extensions: ['dd2'] },
        'application/vnd.oma.drm.risd+xml': { source: 'iana' },
        'application/vnd.oma.group-usage-list+xml': { source: 'iana' },
        'application/vnd.oma.lwm2m+json': { source: 'iana', compressible: !0 },
        'application/vnd.oma.lwm2m+tlv': { source: 'iana' },
        'application/vnd.oma.pal+xml': { source: 'iana' },
        'application/vnd.oma.poc.detailed-progress-report+xml': {
          source: 'iana',
        },
        'application/vnd.oma.poc.final-report+xml': { source: 'iana' },
        'application/vnd.oma.poc.groups+xml': { source: 'iana' },
        'application/vnd.oma.poc.invocation-descriptor+xml': { source: 'iana' },
        'application/vnd.oma.poc.optimized-progress-report+xml': {
          source: 'iana',
        },
        'application/vnd.oma.push': { source: 'iana' },
        'application/vnd.oma.scidm.messages+xml': { source: 'iana' },
        'application/vnd.oma.xcap-directory+xml': { source: 'iana' },
        'application/vnd.omads-email+xml': { source: 'iana' },
        'application/vnd.omads-file+xml': { source: 'iana' },
        'application/vnd.omads-folder+xml': { source: 'iana' },
        'application/vnd.omaloc-supl-init': { source: 'iana' },
        'application/vnd.onepager': { source: 'iana' },
        'application/vnd.onepagertamp': { source: 'iana' },
        'application/vnd.onepagertamx': { source: 'iana' },
        'application/vnd.onepagertat': { source: 'iana' },
        'application/vnd.onepagertatp': { source: 'iana' },
        'application/vnd.onepagertatx': { source: 'iana' },
        'application/vnd.openblox.game+xml': { source: 'iana' },
        'application/vnd.openblox.game-binary': { source: 'iana' },
        'application/vnd.openeye.oeb': { source: 'iana' },
        'application/vnd.openofficeorg.extension': {
          source: 'apache',
          extensions: ['oxt'],
        },
        'application/vnd.openstreetmap.data+xml': { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.custom-properties+xml': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-officedocument.customxmlproperties+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.drawing+xml': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-officedocument.drawingml.chart+xml': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.extended-properties+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml-template':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.comments+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.presentation':
          { source: 'iana', compressible: !1, extensions: ['pptx'] },
        'application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.presprops+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.slide': {
          source: 'iana',
          extensions: ['sldx'],
        },
        'application/vnd.openxmlformats-officedocument.presentationml.slide+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
          { source: 'iana', extensions: ['ppsx'] },
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.tags+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.template':
          { source: 'apache', extensions: ['potx'] },
        'application/vnd.openxmlformats-officedocument.presentationml.template.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml-template':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          source: 'iana',
          compressible: !1,
          extensions: ['xlsx'],
        },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
          { source: 'apache', extensions: ['xltx'] },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.theme+xml': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-officedocument.themeoverride+xml': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-officedocument.vmldrawing': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-officedocument.wordprocessingml-template':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          { source: 'iana', compressible: !1, extensions: ['docx'] },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
          { source: 'apache', extensions: ['dotx'] },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-package.core-properties+xml': {
          source: 'iana',
        },
        'application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml':
          { source: 'iana' },
        'application/vnd.openxmlformats-package.relationships+xml': {
          source: 'iana',
        },
        'application/vnd.oracle.resource+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.orange.indata': { source: 'iana' },
        'application/vnd.osa.netdeploy': { source: 'iana' },
        'application/vnd.osgeo.mapguide.package': {
          source: 'iana',
          extensions: ['mgp'],
        },
        'application/vnd.osgi.bundle': { source: 'iana' },
        'application/vnd.osgi.dp': { source: 'iana', extensions: ['dp'] },
        'application/vnd.osgi.subsystem': {
          source: 'iana',
          extensions: ['esa'],
        },
        'application/vnd.otps.ct-kip+xml': { source: 'iana' },
        'application/vnd.oxli.countgraph': { source: 'iana' },
        'application/vnd.pagerduty+json': { source: 'iana', compressible: !0 },
        'application/vnd.palm': {
          source: 'iana',
          extensions: ['pdb', 'pqa', 'oprc'],
        },
        'application/vnd.panoply': { source: 'iana' },
        'application/vnd.paos+xml': { source: 'iana' },
        'application/vnd.paos.xml': { source: 'apache' },
        'application/vnd.pawaafile': { source: 'iana', extensions: ['paw'] },
        'application/vnd.pcos': { source: 'iana' },
        'application/vnd.pg.format': { source: 'iana', extensions: ['str'] },
        'application/vnd.pg.osasli': { source: 'iana', extensions: ['ei6'] },
        'application/vnd.piaccess.application-licence': { source: 'iana' },
        'application/vnd.picsel': { source: 'iana', extensions: ['efif'] },
        'application/vnd.pmi.widget': { source: 'iana', extensions: ['wg'] },
        'application/vnd.poc.group-advertisement+xml': { source: 'iana' },
        'application/vnd.pocketlearn': { source: 'iana', extensions: ['plf'] },
        'application/vnd.powerbuilder6': {
          source: 'iana',
          extensions: ['pbd'],
        },
        'application/vnd.powerbuilder6-s': { source: 'iana' },
        'application/vnd.powerbuilder7': { source: 'iana' },
        'application/vnd.powerbuilder7-s': { source: 'iana' },
        'application/vnd.powerbuilder75': { source: 'iana' },
        'application/vnd.powerbuilder75-s': { source: 'iana' },
        'application/vnd.preminet': { source: 'iana' },
        'application/vnd.previewsystems.box': {
          source: 'iana',
          extensions: ['box'],
        },
        'application/vnd.proteus.magazine': {
          source: 'iana',
          extensions: ['mgz'],
        },
        'application/vnd.publishare-delta-tree': {
          source: 'iana',
          extensions: ['qps'],
        },
        'application/vnd.pvi.ptid1': { source: 'iana', extensions: ['ptid'] },
        'application/vnd.pwg-multiplexed': { source: 'iana' },
        'application/vnd.pwg-xhtml-print+xml': { source: 'iana' },
        'application/vnd.qualcomm.brew-app-res': { source: 'iana' },
        'application/vnd.quarantainenet': { source: 'iana' },
        'application/vnd.quark.quarkxpress': {
          source: 'iana',
          extensions: ['qxd', 'qxt', 'qwd', 'qwt', 'qxl', 'qxb'],
        },
        'application/vnd.quobject-quoxdocument': { source: 'iana' },
        'application/vnd.radisys.moml+xml': { source: 'iana' },
        'application/vnd.radisys.msml+xml': { source: 'iana' },
        'application/vnd.radisys.msml-audit+xml': { source: 'iana' },
        'application/vnd.radisys.msml-audit-conf+xml': { source: 'iana' },
        'application/vnd.radisys.msml-audit-conn+xml': { source: 'iana' },
        'application/vnd.radisys.msml-audit-dialog+xml': { source: 'iana' },
        'application/vnd.radisys.msml-audit-stream+xml': { source: 'iana' },
        'application/vnd.radisys.msml-conf+xml': { source: 'iana' },
        'application/vnd.radisys.msml-dialog+xml': { source: 'iana' },
        'application/vnd.radisys.msml-dialog-base+xml': { source: 'iana' },
        'application/vnd.radisys.msml-dialog-fax-detect+xml': {
          source: 'iana',
        },
        'application/vnd.radisys.msml-dialog-fax-sendrecv+xml': {
          source: 'iana',
        },
        'application/vnd.radisys.msml-dialog-group+xml': { source: 'iana' },
        'application/vnd.radisys.msml-dialog-speech+xml': { source: 'iana' },
        'application/vnd.radisys.msml-dialog-transform+xml': { source: 'iana' },
        'application/vnd.rainstor.data': { source: 'iana' },
        'application/vnd.rapid': { source: 'iana' },
        'application/vnd.rar': { source: 'iana' },
        'application/vnd.realvnc.bed': { source: 'iana', extensions: ['bed'] },
        'application/vnd.recordare.musicxml': {
          source: 'iana',
          extensions: ['mxl'],
        },
        'application/vnd.recordare.musicxml+xml': {
          source: 'iana',
          extensions: ['musicxml'],
        },
        'application/vnd.renlearn.rlprint': { source: 'iana' },
        'application/vnd.rig.cryptonote': {
          source: 'iana',
          extensions: ['cryptonote'],
        },
        'application/vnd.rim.cod': { source: 'apache', extensions: ['cod'] },
        'application/vnd.rn-realmedia': {
          source: 'apache',
          extensions: ['rm'],
        },
        'application/vnd.rn-realmedia-vbr': {
          source: 'apache',
          extensions: ['rmvb'],
        },
        'application/vnd.route66.link66+xml': {
          source: 'iana',
          extensions: ['link66'],
        },
        'application/vnd.rs-274x': { source: 'iana' },
        'application/vnd.ruckus.download': { source: 'iana' },
        'application/vnd.s3sms': { source: 'iana' },
        'application/vnd.sailingtracker.track': {
          source: 'iana',
          extensions: ['st'],
        },
        'application/vnd.sbm.cid': { source: 'iana' },
        'application/vnd.sbm.mid2': { source: 'iana' },
        'application/vnd.scribus': { source: 'iana' },
        'application/vnd.sealed.3df': { source: 'iana' },
        'application/vnd.sealed.csf': { source: 'iana' },
        'application/vnd.sealed.doc': { source: 'iana' },
        'application/vnd.sealed.eml': { source: 'iana' },
        'application/vnd.sealed.mht': { source: 'iana' },
        'application/vnd.sealed.net': { source: 'iana' },
        'application/vnd.sealed.ppt': { source: 'iana' },
        'application/vnd.sealed.tiff': { source: 'iana' },
        'application/vnd.sealed.xls': { source: 'iana' },
        'application/vnd.sealedmedia.softseal.html': { source: 'iana' },
        'application/vnd.sealedmedia.softseal.pdf': { source: 'iana' },
        'application/vnd.seemail': { source: 'iana', extensions: ['see'] },
        'application/vnd.sema': { source: 'iana', extensions: ['sema'] },
        'application/vnd.semd': { source: 'iana', extensions: ['semd'] },
        'application/vnd.semf': { source: 'iana', extensions: ['semf'] },
        'application/vnd.shana.informed.formdata': {
          source: 'iana',
          extensions: ['ifm'],
        },
        'application/vnd.shana.informed.formtemplate': {
          source: 'iana',
          extensions: ['itp'],
        },
        'application/vnd.shana.informed.interchange': {
          source: 'iana',
          extensions: ['iif'],
        },
        'application/vnd.shana.informed.package': {
          source: 'iana',
          extensions: ['ipk'],
        },
        'application/vnd.sigrok.session': { source: 'iana' },
        'application/vnd.simtech-mindmapper': {
          source: 'iana',
          extensions: ['twd', 'twds'],
        },
        'application/vnd.siren+json': { source: 'iana', compressible: !0 },
        'application/vnd.smaf': { source: 'iana', extensions: ['mmf'] },
        'application/vnd.smart.notebook': { source: 'iana' },
        'application/vnd.smart.teacher': {
          source: 'iana',
          extensions: ['teacher'],
        },
        'application/vnd.software602.filler.form+xml': { source: 'iana' },
        'application/vnd.software602.filler.form-xml-zip': { source: 'iana' },
        'application/vnd.solent.sdkm+xml': {
          source: 'iana',
          extensions: ['sdkm', 'sdkd'],
        },
        'application/vnd.spotfire.dxp': { source: 'iana', extensions: ['dxp'] },
        'application/vnd.spotfire.sfs': { source: 'iana', extensions: ['sfs'] },
        'application/vnd.sss-cod': { source: 'iana' },
        'application/vnd.sss-dtf': { source: 'iana' },
        'application/vnd.sss-ntf': { source: 'iana' },
        'application/vnd.stardivision.calc': {
          source: 'apache',
          extensions: ['sdc'],
        },
        'application/vnd.stardivision.draw': {
          source: 'apache',
          extensions: ['sda'],
        },
        'application/vnd.stardivision.impress': {
          source: 'apache',
          extensions: ['sdd'],
        },
        'application/vnd.stardivision.math': {
          source: 'apache',
          extensions: ['smf'],
        },
        'application/vnd.stardivision.writer': {
          source: 'apache',
          extensions: ['sdw', 'vor'],
        },
        'application/vnd.stardivision.writer-global': {
          source: 'apache',
          extensions: ['sgl'],
        },
        'application/vnd.stepmania.package': {
          source: 'iana',
          extensions: ['smzip'],
        },
        'application/vnd.stepmania.stepchart': {
          source: 'iana',
          extensions: ['sm'],
        },
        'application/vnd.street-stream': { source: 'iana' },
        'application/vnd.sun.wadl+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['wadl'],
        },
        'application/vnd.sun.xml.calc': {
          source: 'apache',
          extensions: ['sxc'],
        },
        'application/vnd.sun.xml.calc.template': {
          source: 'apache',
          extensions: ['stc'],
        },
        'application/vnd.sun.xml.draw': {
          source: 'apache',
          extensions: ['sxd'],
        },
        'application/vnd.sun.xml.draw.template': {
          source: 'apache',
          extensions: ['std'],
        },
        'application/vnd.sun.xml.impress': {
          source: 'apache',
          extensions: ['sxi'],
        },
        'application/vnd.sun.xml.impress.template': {
          source: 'apache',
          extensions: ['sti'],
        },
        'application/vnd.sun.xml.math': {
          source: 'apache',
          extensions: ['sxm'],
        },
        'application/vnd.sun.xml.writer': {
          source: 'apache',
          extensions: ['sxw'],
        },
        'application/vnd.sun.xml.writer.global': {
          source: 'apache',
          extensions: ['sxg'],
        },
        'application/vnd.sun.xml.writer.template': {
          source: 'apache',
          extensions: ['stw'],
        },
        'application/vnd.sus-calendar': {
          source: 'iana',
          extensions: ['sus', 'susp'],
        },
        'application/vnd.svd': { source: 'iana', extensions: ['svd'] },
        'application/vnd.swiftview-ics': { source: 'iana' },
        'application/vnd.symbian.install': {
          source: 'apache',
          extensions: ['sis', 'sisx'],
        },
        'application/vnd.syncml+xml': { source: 'iana', extensions: ['xsm'] },
        'application/vnd.syncml.dm+wbxml': {
          source: 'iana',
          extensions: ['bdm'],
        },
        'application/vnd.syncml.dm+xml': {
          source: 'iana',
          extensions: ['xdm'],
        },
        'application/vnd.syncml.dm.notification': { source: 'iana' },
        'application/vnd.syncml.dmddf+wbxml': { source: 'iana' },
        'application/vnd.syncml.dmddf+xml': { source: 'iana' },
        'application/vnd.syncml.dmtnds+wbxml': { source: 'iana' },
        'application/vnd.syncml.dmtnds+xml': { source: 'iana' },
        'application/vnd.syncml.ds.notification': { source: 'iana' },
        'application/vnd.tableschema+json': {
          source: 'iana',
          compressible: !0,
        },
        'application/vnd.tao.intent-module-archive': {
          source: 'iana',
          extensions: ['tao'],
        },
        'application/vnd.tcpdump.pcap': {
          source: 'iana',
          extensions: ['pcap', 'cap', 'dmp'],
        },
        'application/vnd.tmd.mediaflex.api+xml': { source: 'iana' },
        'application/vnd.tml': { source: 'iana' },
        'application/vnd.tmobile-livetv': {
          source: 'iana',
          extensions: ['tmo'],
        },
        'application/vnd.tri.onesource': { source: 'iana' },
        'application/vnd.trid.tpt': { source: 'iana', extensions: ['tpt'] },
        'application/vnd.triscape.mxs': { source: 'iana', extensions: ['mxs'] },
        'application/vnd.trueapp': { source: 'iana', extensions: ['tra'] },
        'application/vnd.truedoc': { source: 'iana' },
        'application/vnd.ubisoft.webplayer': { source: 'iana' },
        'application/vnd.ufdl': { source: 'iana', extensions: ['ufd', 'ufdl'] },
        'application/vnd.uiq.theme': { source: 'iana', extensions: ['utz'] },
        'application/vnd.umajin': { source: 'iana', extensions: ['umj'] },
        'application/vnd.unity': { source: 'iana', extensions: ['unityweb'] },
        'application/vnd.uoml+xml': { source: 'iana', extensions: ['uoml'] },
        'application/vnd.uplanet.alert': { source: 'iana' },
        'application/vnd.uplanet.alert-wbxml': { source: 'iana' },
        'application/vnd.uplanet.bearer-choice': { source: 'iana' },
        'application/vnd.uplanet.bearer-choice-wbxml': { source: 'iana' },
        'application/vnd.uplanet.cacheop': { source: 'iana' },
        'application/vnd.uplanet.cacheop-wbxml': { source: 'iana' },
        'application/vnd.uplanet.channel': { source: 'iana' },
        'application/vnd.uplanet.channel-wbxml': { source: 'iana' },
        'application/vnd.uplanet.list': { source: 'iana' },
        'application/vnd.uplanet.list-wbxml': { source: 'iana' },
        'application/vnd.uplanet.listcmd': { source: 'iana' },
        'application/vnd.uplanet.listcmd-wbxml': { source: 'iana' },
        'application/vnd.uplanet.signal': { source: 'iana' },
        'application/vnd.uri-map': { source: 'iana' },
        'application/vnd.valve.source.material': { source: 'iana' },
        'application/vnd.vcx': { source: 'iana', extensions: ['vcx'] },
        'application/vnd.vd-study': { source: 'iana' },
        'application/vnd.vectorworks': { source: 'iana' },
        'application/vnd.vel+json': { source: 'iana', compressible: !0 },
        'application/vnd.verimatrix.vcas': { source: 'iana' },
        'application/vnd.vidsoft.vidconference': { source: 'iana' },
        'application/vnd.visio': {
          source: 'iana',
          extensions: ['vsd', 'vst', 'vss', 'vsw'],
        },
        'application/vnd.visionary': { source: 'iana', extensions: ['vis'] },
        'application/vnd.vividence.scriptfile': { source: 'iana' },
        'application/vnd.vsf': { source: 'iana', extensions: ['vsf'] },
        'application/vnd.wap.sic': { source: 'iana' },
        'application/vnd.wap.slc': { source: 'iana' },
        'application/vnd.wap.wbxml': { source: 'iana', extensions: ['wbxml'] },
        'application/vnd.wap.wmlc': { source: 'iana', extensions: ['wmlc'] },
        'application/vnd.wap.wmlscriptc': {
          source: 'iana',
          extensions: ['wmlsc'],
        },
        'application/vnd.webturbo': { source: 'iana', extensions: ['wtb'] },
        'application/vnd.wfa.p2p': { source: 'iana' },
        'application/vnd.wfa.wsc': { source: 'iana' },
        'application/vnd.windows.devicepairing': { source: 'iana' },
        'application/vnd.wmc': { source: 'iana' },
        'application/vnd.wmf.bootstrap': { source: 'iana' },
        'application/vnd.wolfram.mathematica': { source: 'iana' },
        'application/vnd.wolfram.mathematica.package': { source: 'iana' },
        'application/vnd.wolfram.player': {
          source: 'iana',
          extensions: ['nbp'],
        },
        'application/vnd.wordperfect': { source: 'iana', extensions: ['wpd'] },
        'application/vnd.wqd': { source: 'iana', extensions: ['wqd'] },
        'application/vnd.wrq-hp3000-labelled': { source: 'iana' },
        'application/vnd.wt.stf': { source: 'iana', extensions: ['stf'] },
        'application/vnd.wv.csp+wbxml': { source: 'iana' },
        'application/vnd.wv.csp+xml': { source: 'iana' },
        'application/vnd.wv.ssp+xml': { source: 'iana' },
        'application/vnd.xacml+json': { source: 'iana', compressible: !0 },
        'application/vnd.xara': { source: 'iana', extensions: ['xar'] },
        'application/vnd.xfdl': { source: 'iana', extensions: ['xfdl'] },
        'application/vnd.xfdl.webform': { source: 'iana' },
        'application/vnd.xmi+xml': { source: 'iana' },
        'application/vnd.xmpie.cpkg': { source: 'iana' },
        'application/vnd.xmpie.dpkg': { source: 'iana' },
        'application/vnd.xmpie.plan': { source: 'iana' },
        'application/vnd.xmpie.ppkg': { source: 'iana' },
        'application/vnd.xmpie.xlim': { source: 'iana' },
        'application/vnd.yamaha.hv-dic': {
          source: 'iana',
          extensions: ['hvd'],
        },
        'application/vnd.yamaha.hv-script': {
          source: 'iana',
          extensions: ['hvs'],
        },
        'application/vnd.yamaha.hv-voice': {
          source: 'iana',
          extensions: ['hvp'],
        },
        'application/vnd.yamaha.openscoreformat': {
          source: 'iana',
          extensions: ['osf'],
        },
        'application/vnd.yamaha.openscoreformat.osfpvg+xml': {
          source: 'iana',
          extensions: ['osfpvg'],
        },
        'application/vnd.yamaha.remote-setup': { source: 'iana' },
        'application/vnd.yamaha.smaf-audio': {
          source: 'iana',
          extensions: ['saf'],
        },
        'application/vnd.yamaha.smaf-phrase': {
          source: 'iana',
          extensions: ['spf'],
        },
        'application/vnd.yamaha.through-ngn': { source: 'iana' },
        'application/vnd.yamaha.tunnel-udpencap': { source: 'iana' },
        'application/vnd.yaoweme': { source: 'iana' },
        'application/vnd.yellowriver-custom-menu': {
          source: 'iana',
          extensions: ['cmp'],
        },
        'application/vnd.zul': { source: 'iana', extensions: ['zir', 'zirz'] },
        'application/vnd.zzazz.deck+xml': {
          source: 'iana',
          extensions: ['zaz'],
        },
        'application/voicexml+xml': { source: 'iana', extensions: ['vxml'] },
        'application/vq-rtcpxr': { source: 'iana' },
        'application/watcherinfo+xml': { source: 'iana' },
        'application/whoispp-query': { source: 'iana' },
        'application/whoispp-response': { source: 'iana' },
        'application/widget': { source: 'iana', extensions: ['wgt'] },
        'application/winhlp': { source: 'apache', extensions: ['hlp'] },
        'application/wita': { source: 'iana' },
        'application/wordperfect5.1': { source: 'iana' },
        'application/wsdl+xml': { source: 'iana', extensions: ['wsdl'] },
        'application/wspolicy+xml': {
          source: 'iana',
          extensions: ['wspolicy'],
        },
        'application/x-7z-compressed': {
          source: 'apache',
          compressible: !1,
          extensions: ['7z'],
        },
        'application/x-abiword': { source: 'apache', extensions: ['abw'] },
        'application/x-ace-compressed': {
          source: 'apache',
          extensions: ['ace'],
        },
        'application/x-amf': { source: 'apache' },
        'application/x-apple-diskimage': {
          source: 'apache',
          extensions: ['dmg'],
        },
        'application/x-arj': { compressible: !1, extensions: ['arj'] },
        'application/x-authorware-bin': {
          source: 'apache',
          extensions: ['aab', 'x32', 'u32', 'vox'],
        },
        'application/x-authorware-map': {
          source: 'apache',
          extensions: ['aam'],
        },
        'application/x-authorware-seg': {
          source: 'apache',
          extensions: ['aas'],
        },
        'application/x-bcpio': { source: 'apache', extensions: ['bcpio'] },
        'application/x-bdoc': { compressible: !1, extensions: ['bdoc'] },
        'application/x-bittorrent': {
          source: 'apache',
          extensions: ['torrent'],
        },
        'application/x-blorb': {
          source: 'apache',
          extensions: ['blb', 'blorb'],
        },
        'application/x-bzip': {
          source: 'apache',
          compressible: !1,
          extensions: ['bz'],
        },
        'application/x-bzip2': {
          source: 'apache',
          compressible: !1,
          extensions: ['bz2', 'boz'],
        },
        'application/x-cbr': {
          source: 'apache',
          extensions: ['cbr', 'cba', 'cbt', 'cbz', 'cb7'],
        },
        'application/x-cdlink': { source: 'apache', extensions: ['vcd'] },
        'application/x-cfs-compressed': {
          source: 'apache',
          extensions: ['cfs'],
        },
        'application/x-chat': { source: 'apache', extensions: ['chat'] },
        'application/x-chess-pgn': { source: 'apache', extensions: ['pgn'] },
        'application/x-chrome-extension': { extensions: ['crx'] },
        'application/x-cocoa': { source: 'nginx', extensions: ['cco'] },
        'application/x-compress': { source: 'apache' },
        'application/x-conference': { source: 'apache', extensions: ['nsc'] },
        'application/x-cpio': { source: 'apache', extensions: ['cpio'] },
        'application/x-csh': { source: 'apache', extensions: ['csh'] },
        'application/x-deb': { compressible: !1 },
        'application/x-debian-package': {
          source: 'apache',
          extensions: ['deb', 'udeb'],
        },
        'application/x-dgc-compressed': {
          source: 'apache',
          extensions: ['dgc'],
        },
        'application/x-director': {
          source: 'apache',
          extensions: [
            'dir',
            'dcr',
            'dxr',
            'cst',
            'cct',
            'cxt',
            'w3d',
            'fgd',
            'swa',
          ],
        },
        'application/x-doom': { source: 'apache', extensions: ['wad'] },
        'application/x-dtbncx+xml': { source: 'apache', extensions: ['ncx'] },
        'application/x-dtbook+xml': { source: 'apache', extensions: ['dtb'] },
        'application/x-dtbresource+xml': {
          source: 'apache',
          extensions: ['res'],
        },
        'application/x-dvi': {
          source: 'apache',
          compressible: !1,
          extensions: ['dvi'],
        },
        'application/x-envoy': { source: 'apache', extensions: ['evy'] },
        'application/x-eva': { source: 'apache', extensions: ['eva'] },
        'application/x-font-bdf': { source: 'apache', extensions: ['bdf'] },
        'application/x-font-dos': { source: 'apache' },
        'application/x-font-framemaker': { source: 'apache' },
        'application/x-font-ghostscript': {
          source: 'apache',
          extensions: ['gsf'],
        },
        'application/x-font-libgrx': { source: 'apache' },
        'application/x-font-linux-psf': {
          source: 'apache',
          extensions: ['psf'],
        },
        'application/x-font-otf': {
          source: 'apache',
          compressible: !0,
          extensions: ['otf'],
        },
        'application/x-font-pcf': { source: 'apache', extensions: ['pcf'] },
        'application/x-font-snf': { source: 'apache', extensions: ['snf'] },
        'application/x-font-speedo': { source: 'apache' },
        'application/x-font-sunos-news': { source: 'apache' },
        'application/x-font-ttf': {
          source: 'apache',
          compressible: !0,
          extensions: ['ttf', 'ttc'],
        },
        'application/x-font-type1': {
          source: 'apache',
          extensions: ['pfa', 'pfb', 'pfm', 'afm'],
        },
        'application/x-font-vfont': { source: 'apache' },
        'application/x-freearc': { source: 'apache', extensions: ['arc'] },
        'application/x-futuresplash': { source: 'apache', extensions: ['spl'] },
        'application/x-gca-compressed': {
          source: 'apache',
          extensions: ['gca'],
        },
        'application/x-glulx': { source: 'apache', extensions: ['ulx'] },
        'application/x-gnumeric': {
          source: 'apache',
          extensions: ['gnumeric'],
        },
        'application/x-gramps-xml': {
          source: 'apache',
          extensions: ['gramps'],
        },
        'application/x-gtar': { source: 'apache', extensions: ['gtar'] },
        'application/x-gzip': { source: 'apache' },
        'application/x-hdf': { source: 'apache', extensions: ['hdf'] },
        'application/x-httpd-php': { compressible: !0, extensions: ['php'] },
        'application/x-install-instructions': {
          source: 'apache',
          extensions: ['install'],
        },
        'application/x-iso9660-image': {
          source: 'apache',
          extensions: ['iso'],
        },
        'application/x-java-archive-diff': {
          source: 'nginx',
          extensions: ['jardiff'],
        },
        'application/x-java-jnlp-file': {
          source: 'apache',
          compressible: !1,
          extensions: ['jnlp'],
        },
        'application/x-javascript': { compressible: !0 },
        'application/x-latex': {
          source: 'apache',
          compressible: !1,
          extensions: ['latex'],
        },
        'application/x-lua-bytecode': { extensions: ['luac'] },
        'application/x-lzh-compressed': {
          source: 'apache',
          extensions: ['lzh', 'lha'],
        },
        'application/x-makeself': { source: 'nginx', extensions: ['run'] },
        'application/x-mie': { source: 'apache', extensions: ['mie'] },
        'application/x-mobipocket-ebook': {
          source: 'apache',
          extensions: ['prc', 'mobi'],
        },
        'application/x-mpegurl': { compressible: !1 },
        'application/x-ms-application': {
          source: 'apache',
          extensions: ['application'],
        },
        'application/x-ms-shortcut': { source: 'apache', extensions: ['lnk'] },
        'application/x-ms-wmd': { source: 'apache', extensions: ['wmd'] },
        'application/x-ms-wmz': { source: 'apache', extensions: ['wmz'] },
        'application/x-ms-xbap': { source: 'apache', extensions: ['xbap'] },
        'application/x-msaccess': { source: 'apache', extensions: ['mdb'] },
        'application/x-msbinder': { source: 'apache', extensions: ['obd'] },
        'application/x-mscardfile': { source: 'apache', extensions: ['crd'] },
        'application/x-msclip': { source: 'apache', extensions: ['clp'] },
        'application/x-msdos-program': { extensions: ['exe'] },
        'application/x-msdownload': {
          source: 'apache',
          extensions: ['exe', 'dll', 'com', 'bat', 'msi'],
        },
        'application/x-msmediaview': {
          source: 'apache',
          extensions: ['mvb', 'm13', 'm14'],
        },
        'application/x-msmetafile': {
          source: 'apache',
          extensions: ['wmf', 'wmz', 'emf', 'emz'],
        },
        'application/x-msmoney': { source: 'apache', extensions: ['mny'] },
        'application/x-mspublisher': { source: 'apache', extensions: ['pub'] },
        'application/x-msschedule': { source: 'apache', extensions: ['scd'] },
        'application/x-msterminal': { source: 'apache', extensions: ['trm'] },
        'application/x-mswrite': { source: 'apache', extensions: ['wri'] },
        'application/x-netcdf': { source: 'apache', extensions: ['nc', 'cdf'] },
        'application/x-ns-proxy-autoconfig': {
          compressible: !0,
          extensions: ['pac'],
        },
        'application/x-nzb': { source: 'apache', extensions: ['nzb'] },
        'application/x-perl': { source: 'nginx', extensions: ['pl', 'pm'] },
        'application/x-pilot': { source: 'nginx', extensions: ['prc', 'pdb'] },
        'application/x-pkcs12': {
          source: 'apache',
          compressible: !1,
          extensions: ['p12', 'pfx'],
        },
        'application/x-pkcs7-certificates': {
          source: 'apache',
          extensions: ['p7b', 'spc'],
        },
        'application/x-pkcs7-certreqresp': {
          source: 'apache',
          extensions: ['p7r'],
        },
        'application/x-rar-compressed': {
          source: 'apache',
          compressible: !1,
          extensions: ['rar'],
        },
        'application/x-redhat-package-manager': {
          source: 'nginx',
          extensions: ['rpm'],
        },
        'application/x-research-info-systems': {
          source: 'apache',
          extensions: ['ris'],
        },
        'application/x-sea': { source: 'nginx', extensions: ['sea'] },
        'application/x-sh': {
          source: 'apache',
          compressible: !0,
          extensions: ['sh'],
        },
        'application/x-shar': { source: 'apache', extensions: ['shar'] },
        'application/x-shockwave-flash': {
          source: 'apache',
          compressible: !1,
          extensions: ['swf'],
        },
        'application/x-silverlight-app': {
          source: 'apache',
          extensions: ['xap'],
        },
        'application/x-sql': { source: 'apache', extensions: ['sql'] },
        'application/x-stuffit': {
          source: 'apache',
          compressible: !1,
          extensions: ['sit'],
        },
        'application/x-stuffitx': { source: 'apache', extensions: ['sitx'] },
        'application/x-subrip': { source: 'apache', extensions: ['srt'] },
        'application/x-sv4cpio': { source: 'apache', extensions: ['sv4cpio'] },
        'application/x-sv4crc': { source: 'apache', extensions: ['sv4crc'] },
        'application/x-t3vm-image': { source: 'apache', extensions: ['t3'] },
        'application/x-tads': { source: 'apache', extensions: ['gam'] },
        'application/x-tar': {
          source: 'apache',
          compressible: !0,
          extensions: ['tar'],
        },
        'application/x-tcl': { source: 'apache', extensions: ['tcl', 'tk'] },
        'application/x-tex': { source: 'apache', extensions: ['tex'] },
        'application/x-tex-tfm': { source: 'apache', extensions: ['tfm'] },
        'application/x-texinfo': {
          source: 'apache',
          extensions: ['texinfo', 'texi'],
        },
        'application/x-tgif': { source: 'apache', extensions: ['obj'] },
        'application/x-ustar': { source: 'apache', extensions: ['ustar'] },
        'application/x-virtualbox-hdd': {
          compressible: !0,
          extensions: ['hdd'],
        },
        'application/x-virtualbox-ova': {
          compressible: !0,
          extensions: ['ova'],
        },
        'application/x-virtualbox-ovf': {
          compressible: !0,
          extensions: ['ovf'],
        },
        'application/x-virtualbox-vbox': {
          compressible: !0,
          extensions: ['vbox'],
        },
        'application/x-virtualbox-vbox-extpack': {
          compressible: !1,
          extensions: ['vbox-extpack'],
        },
        'application/x-virtualbox-vdi': {
          compressible: !0,
          extensions: ['vdi'],
        },
        'application/x-virtualbox-vhd': {
          compressible: !0,
          extensions: ['vhd'],
        },
        'application/x-virtualbox-vmdk': {
          compressible: !0,
          extensions: ['vmdk'],
        },
        'application/x-wais-source': { source: 'apache', extensions: ['src'] },
        'application/x-web-app-manifest+json': {
          compressible: !0,
          extensions: ['webapp'],
        },
        'application/x-www-form-urlencoded': {
          source: 'iana',
          compressible: !0,
        },
        'application/x-x509-ca-cert': {
          source: 'apache',
          extensions: ['der', 'crt', 'pem'],
        },
        'application/x-xfig': { source: 'apache', extensions: ['fig'] },
        'application/x-xliff+xml': { source: 'apache', extensions: ['xlf'] },
        'application/x-xpinstall': {
          source: 'apache',
          compressible: !1,
          extensions: ['xpi'],
        },
        'application/x-xz': { source: 'apache', extensions: ['xz'] },
        'application/x-zmachine': {
          source: 'apache',
          extensions: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8'],
        },
        'application/x400-bp': { source: 'iana' },
        'application/xacml+xml': { source: 'iana' },
        'application/xaml+xml': { source: 'apache', extensions: ['xaml'] },
        'application/xcap-att+xml': { source: 'iana' },
        'application/xcap-caps+xml': { source: 'iana' },
        'application/xcap-diff+xml': { source: 'iana', extensions: ['xdf'] },
        'application/xcap-el+xml': { source: 'iana' },
        'application/xcap-error+xml': { source: 'iana' },
        'application/xcap-ns+xml': { source: 'iana' },
        'application/xcon-conference-info+xml': { source: 'iana' },
        'application/xcon-conference-info-diff+xml': { source: 'iana' },
        'application/xenc+xml': { source: 'iana', extensions: ['xenc'] },
        'application/xhtml+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['xhtml', 'xht'],
        },
        'application/xhtml-voice+xml': { source: 'apache' },
        'application/xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['xml', 'xsl', 'xsd', 'rng'],
        },
        'application/xml-dtd': {
          source: 'iana',
          compressible: !0,
          extensions: ['dtd'],
        },
        'application/xml-external-parsed-entity': { source: 'iana' },
        'application/xml-patch+xml': { source: 'iana' },
        'application/xmpp+xml': { source: 'iana' },
        'application/xop+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['xop'],
        },
        'application/xproc+xml': { source: 'apache', extensions: ['xpl'] },
        'application/xslt+xml': { source: 'iana', extensions: ['xslt'] },
        'application/xspf+xml': { source: 'apache', extensions: ['xspf'] },
        'application/xv+xml': {
          source: 'iana',
          extensions: ['mxml', 'xhvml', 'xvml', 'xvm'],
        },
        'application/yang': { source: 'iana', extensions: ['yang'] },
        'application/yang-data+json': { source: 'iana', compressible: !0 },
        'application/yang-data+xml': { source: 'iana' },
        'application/yang-patch+json': { source: 'iana', compressible: !0 },
        'application/yang-patch+xml': { source: 'iana' },
        'application/yin+xml': { source: 'iana', extensions: ['yin'] },
        'application/zip': {
          source: 'iana',
          compressible: !1,
          extensions: ['zip'],
        },
        'application/zlib': { source: 'iana' },
        'audio/1d-interleaved-parityfec': { source: 'iana' },
        'audio/32kadpcm': { source: 'iana' },
        'audio/3gpp': {
          source: 'iana',
          compressible: !1,
          extensions: ['3gpp'],
        },
        'audio/3gpp2': { source: 'iana' },
        'audio/ac3': { source: 'iana' },
        'audio/adpcm': { source: 'apache', extensions: ['adp'] },
        'audio/amr': { source: 'iana' },
        'audio/amr-wb': { source: 'iana' },
        'audio/amr-wb+': { source: 'iana' },
        'audio/aptx': { source: 'iana' },
        'audio/asc': { source: 'iana' },
        'audio/atrac-advanced-lossless': { source: 'iana' },
        'audio/atrac-x': { source: 'iana' },
        'audio/atrac3': { source: 'iana' },
        'audio/basic': {
          source: 'iana',
          compressible: !1,
          extensions: ['au', 'snd'],
        },
        'audio/bv16': { source: 'iana' },
        'audio/bv32': { source: 'iana' },
        'audio/clearmode': { source: 'iana' },
        'audio/cn': { source: 'iana' },
        'audio/dat12': { source: 'iana' },
        'audio/dls': { source: 'iana' },
        'audio/dsr-es201108': { source: 'iana' },
        'audio/dsr-es202050': { source: 'iana' },
        'audio/dsr-es202211': { source: 'iana' },
        'audio/dsr-es202212': { source: 'iana' },
        'audio/dv': { source: 'iana' },
        'audio/dvi4': { source: 'iana' },
        'audio/eac3': { source: 'iana' },
        'audio/encaprtp': { source: 'iana' },
        'audio/evrc': { source: 'iana' },
        'audio/evrc-qcp': { source: 'iana' },
        'audio/evrc0': { source: 'iana' },
        'audio/evrc1': { source: 'iana' },
        'audio/evrcb': { source: 'iana' },
        'audio/evrcb0': { source: 'iana' },
        'audio/evrcb1': { source: 'iana' },
        'audio/evrcnw': { source: 'iana' },
        'audio/evrcnw0': { source: 'iana' },
        'audio/evrcnw1': { source: 'iana' },
        'audio/evrcwb': { source: 'iana' },
        'audio/evrcwb0': { source: 'iana' },
        'audio/evrcwb1': { source: 'iana' },
        'audio/evs': { source: 'iana' },
        'audio/fwdred': { source: 'iana' },
        'audio/g711-0': { source: 'iana' },
        'audio/g719': { source: 'iana' },
        'audio/g722': { source: 'iana' },
        'audio/g7221': { source: 'iana' },
        'audio/g723': { source: 'iana' },
        'audio/g726-16': { source: 'iana' },
        'audio/g726-24': { source: 'iana' },
        'audio/g726-32': { source: 'iana' },
        'audio/g726-40': { source: 'iana' },
        'audio/g728': { source: 'iana' },
        'audio/g729': { source: 'iana' },
        'audio/g7291': { source: 'iana' },
        'audio/g729d': { source: 'iana' },
        'audio/g729e': { source: 'iana' },
        'audio/gsm': { source: 'iana' },
        'audio/gsm-efr': { source: 'iana' },
        'audio/gsm-hr-08': { source: 'iana' },
        'audio/ilbc': { source: 'iana' },
        'audio/ip-mr_v2.5': { source: 'iana' },
        'audio/isac': { source: 'apache' },
        'audio/l16': { source: 'iana' },
        'audio/l20': { source: 'iana' },
        'audio/l24': { source: 'iana', compressible: !1 },
        'audio/l8': { source: 'iana' },
        'audio/lpc': { source: 'iana' },
        'audio/melp': { source: 'iana' },
        'audio/melp1200': { source: 'iana' },
        'audio/melp2400': { source: 'iana' },
        'audio/melp600': { source: 'iana' },
        'audio/midi': {
          source: 'apache',
          extensions: ['mid', 'midi', 'kar', 'rmi'],
        },
        'audio/mobile-xmf': { source: 'iana' },
        'audio/mp3': { compressible: !1, extensions: ['mp3'] },
        'audio/mp4': {
          source: 'iana',
          compressible: !1,
          extensions: ['m4a', 'mp4a'],
        },
        'audio/mp4a-latm': { source: 'iana' },
        'audio/mpa': { source: 'iana' },
        'audio/mpa-robust': { source: 'iana' },
        'audio/mpeg': {
          source: 'iana',
          compressible: !1,
          extensions: ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
        },
        'audio/mpeg4-generic': { source: 'iana' },
        'audio/musepack': { source: 'apache' },
        'audio/ogg': {
          source: 'iana',
          compressible: !1,
          extensions: ['oga', 'ogg', 'spx'],
        },
        'audio/opus': { source: 'iana' },
        'audio/parityfec': { source: 'iana' },
        'audio/pcma': { source: 'iana' },
        'audio/pcma-wb': { source: 'iana' },
        'audio/pcmu': { source: 'iana' },
        'audio/pcmu-wb': { source: 'iana' },
        'audio/prs.sid': { source: 'iana' },
        'audio/qcelp': { source: 'iana' },
        'audio/raptorfec': { source: 'iana' },
        'audio/red': { source: 'iana' },
        'audio/rtp-enc-aescm128': { source: 'iana' },
        'audio/rtp-midi': { source: 'iana' },
        'audio/rtploopback': { source: 'iana' },
        'audio/rtx': { source: 'iana' },
        'audio/s3m': { source: 'apache', extensions: ['s3m'] },
        'audio/silk': { source: 'apache', extensions: ['sil'] },
        'audio/smv': { source: 'iana' },
        'audio/smv-qcp': { source: 'iana' },
        'audio/smv0': { source: 'iana' },
        'audio/sp-midi': { source: 'iana' },
        'audio/speex': { source: 'iana' },
        'audio/t140c': { source: 'iana' },
        'audio/t38': { source: 'iana' },
        'audio/telephone-event': { source: 'iana' },
        'audio/tone': { source: 'iana' },
        'audio/uemclip': { source: 'iana' },
        'audio/ulpfec': { source: 'iana' },
        'audio/vdvi': { source: 'iana' },
        'audio/vmr-wb': { source: 'iana' },
        'audio/vnd.3gpp.iufp': { source: 'iana' },
        'audio/vnd.4sb': { source: 'iana' },
        'audio/vnd.audiokoz': { source: 'iana' },
        'audio/vnd.celp': { source: 'iana' },
        'audio/vnd.cisco.nse': { source: 'iana' },
        'audio/vnd.cmles.radio-events': { source: 'iana' },
        'audio/vnd.cns.anp1': { source: 'iana' },
        'audio/vnd.cns.inf1': { source: 'iana' },
        'audio/vnd.dece.audio': { source: 'iana', extensions: ['uva', 'uvva'] },
        'audio/vnd.digital-winds': { source: 'iana', extensions: ['eol'] },
        'audio/vnd.dlna.adts': { source: 'iana' },
        'audio/vnd.dolby.heaac.1': { source: 'iana' },
        'audio/vnd.dolby.heaac.2': { source: 'iana' },
        'audio/vnd.dolby.mlp': { source: 'iana' },
        'audio/vnd.dolby.mps': { source: 'iana' },
        'audio/vnd.dolby.pl2': { source: 'iana' },
        'audio/vnd.dolby.pl2x': { source: 'iana' },
        'audio/vnd.dolby.pl2z': { source: 'iana' },
        'audio/vnd.dolby.pulse.1': { source: 'iana' },
        'audio/vnd.dra': { source: 'iana', extensions: ['dra'] },
        'audio/vnd.dts': { source: 'iana', extensions: ['dts'] },
        'audio/vnd.dts.hd': { source: 'iana', extensions: ['dtshd'] },
        'audio/vnd.dvb.file': { source: 'iana' },
        'audio/vnd.everad.plj': { source: 'iana' },
        'audio/vnd.hns.audio': { source: 'iana' },
        'audio/vnd.lucent.voice': { source: 'iana', extensions: ['lvp'] },
        'audio/vnd.ms-playready.media.pya': {
          source: 'iana',
          extensions: ['pya'],
        },
        'audio/vnd.nokia.mobile-xmf': { source: 'iana' },
        'audio/vnd.nortel.vbk': { source: 'iana' },
        'audio/vnd.nuera.ecelp4800': {
          source: 'iana',
          extensions: ['ecelp4800'],
        },
        'audio/vnd.nuera.ecelp7470': {
          source: 'iana',
          extensions: ['ecelp7470'],
        },
        'audio/vnd.nuera.ecelp9600': {
          source: 'iana',
          extensions: ['ecelp9600'],
        },
        'audio/vnd.octel.sbc': { source: 'iana' },
        'audio/vnd.presonus.multitrack': { source: 'iana' },
        'audio/vnd.qcelp': { source: 'iana' },
        'audio/vnd.rhetorex.32kadpcm': { source: 'iana' },
        'audio/vnd.rip': { source: 'iana', extensions: ['rip'] },
        'audio/vnd.rn-realaudio': { compressible: !1 },
        'audio/vnd.sealedmedia.softseal.mpeg': { source: 'iana' },
        'audio/vnd.vmx.cvsd': { source: 'iana' },
        'audio/vnd.wave': { compressible: !1 },
        'audio/vorbis': { source: 'iana', compressible: !1 },
        'audio/vorbis-config': { source: 'iana' },
        'audio/wav': { compressible: !1, extensions: ['wav'] },
        'audio/wave': { compressible: !1, extensions: ['wav'] },
        'audio/webm': {
          source: 'apache',
          compressible: !1,
          extensions: ['weba'],
        },
        'audio/x-aac': {
          source: 'apache',
          compressible: !1,
          extensions: ['aac'],
        },
        'audio/x-aiff': {
          source: 'apache',
          extensions: ['aif', 'aiff', 'aifc'],
        },
        'audio/x-caf': {
          source: 'apache',
          compressible: !1,
          extensions: ['caf'],
        },
        'audio/x-flac': { source: 'apache', extensions: ['flac'] },
        'audio/x-m4a': { source: 'nginx', extensions: ['m4a'] },
        'audio/x-matroska': { source: 'apache', extensions: ['mka'] },
        'audio/x-mpegurl': { source: 'apache', extensions: ['m3u'] },
        'audio/x-ms-wax': { source: 'apache', extensions: ['wax'] },
        'audio/x-ms-wma': { source: 'apache', extensions: ['wma'] },
        'audio/x-pn-realaudio': { source: 'apache', extensions: ['ram', 'ra'] },
        'audio/x-pn-realaudio-plugin': {
          source: 'apache',
          extensions: ['rmp'],
        },
        'audio/x-realaudio': { source: 'nginx', extensions: ['ra'] },
        'audio/x-tta': { source: 'apache' },
        'audio/x-wav': { source: 'apache', extensions: ['wav'] },
        'audio/xm': { source: 'apache', extensions: ['xm'] },
        'chemical/x-cdx': { source: 'apache', extensions: ['cdx'] },
        'chemical/x-cif': { source: 'apache', extensions: ['cif'] },
        'chemical/x-cmdf': { source: 'apache', extensions: ['cmdf'] },
        'chemical/x-cml': { source: 'apache', extensions: ['cml'] },
        'chemical/x-csml': { source: 'apache', extensions: ['csml'] },
        'chemical/x-pdb': { source: 'apache' },
        'chemical/x-xyz': { source: 'apache', extensions: ['xyz'] },
        'font/otf': { compressible: !0, extensions: ['otf'] },
        'image/apng': { compressible: !1, extensions: ['apng'] },
        'image/bmp': { source: 'iana', compressible: !0, extensions: ['bmp'] },
        'image/cgm': { source: 'iana', extensions: ['cgm'] },
        'image/dicom-rle': { source: 'iana' },
        'image/emf': { source: 'iana' },
        'image/fits': { source: 'iana' },
        'image/g3fax': { source: 'iana', extensions: ['g3'] },
        'image/gif': { source: 'iana', compressible: !1, extensions: ['gif'] },
        'image/ief': { source: 'iana', extensions: ['ief'] },
        'image/jls': { source: 'iana' },
        'image/jp2': { source: 'iana' },
        'image/jpeg': {
          source: 'iana',
          compressible: !1,
          extensions: ['jpeg', 'jpg', 'jpe'],
        },
        'image/jpm': { source: 'iana' },
        'image/jpx': { source: 'iana' },
        'image/ktx': { source: 'iana', extensions: ['ktx'] },
        'image/naplps': { source: 'iana' },
        'image/pjpeg': { compressible: !1 },
        'image/png': { source: 'iana', compressible: !1, extensions: ['png'] },
        'image/prs.btif': { source: 'iana', extensions: ['btif'] },
        'image/prs.pti': { source: 'iana' },
        'image/pwg-raster': { source: 'iana' },
        'image/sgi': { source: 'apache', extensions: ['sgi'] },
        'image/svg+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['svg', 'svgz'],
        },
        'image/t38': { source: 'iana' },
        'image/tiff': {
          source: 'iana',
          compressible: !1,
          extensions: ['tiff', 'tif'],
        },
        'image/tiff-fx': { source: 'iana' },
        'image/vnd.adobe.photoshop': {
          source: 'iana',
          compressible: !0,
          extensions: ['psd'],
        },
        'image/vnd.airzip.accelerator.azv': { source: 'iana' },
        'image/vnd.cns.inf2': { source: 'iana' },
        'image/vnd.dece.graphic': {
          source: 'iana',
          extensions: ['uvi', 'uvvi', 'uvg', 'uvvg'],
        },
        'image/vnd.djvu': { source: 'iana', extensions: ['djvu', 'djv'] },
        'image/vnd.dvb.subtitle': { source: 'iana', extensions: ['sub'] },
        'image/vnd.dwg': { source: 'iana', extensions: ['dwg'] },
        'image/vnd.dxf': { source: 'iana', extensions: ['dxf'] },
        'image/vnd.fastbidsheet': { source: 'iana', extensions: ['fbs'] },
        'image/vnd.fpx': { source: 'iana', extensions: ['fpx'] },
        'image/vnd.fst': { source: 'iana', extensions: ['fst'] },
        'image/vnd.fujixerox.edmics-mmr': {
          source: 'iana',
          extensions: ['mmr'],
        },
        'image/vnd.fujixerox.edmics-rlc': {
          source: 'iana',
          extensions: ['rlc'],
        },
        'image/vnd.globalgraphics.pgb': { source: 'iana' },
        'image/vnd.microsoft.icon': { source: 'iana' },
        'image/vnd.mix': { source: 'iana' },
        'image/vnd.mozilla.apng': { source: 'iana' },
        'image/vnd.ms-modi': { source: 'iana', extensions: ['mdi'] },
        'image/vnd.ms-photo': { source: 'apache', extensions: ['wdp'] },
        'image/vnd.net-fpx': { source: 'iana', extensions: ['npx'] },
        'image/vnd.radiance': { source: 'iana' },
        'image/vnd.sealed.png': { source: 'iana' },
        'image/vnd.sealedmedia.softseal.gif': { source: 'iana' },
        'image/vnd.sealedmedia.softseal.jpg': { source: 'iana' },
        'image/vnd.svf': { source: 'iana' },
        'image/vnd.tencent.tap': { source: 'iana' },
        'image/vnd.valve.source.texture': { source: 'iana' },
        'image/vnd.wap.wbmp': { source: 'iana', extensions: ['wbmp'] },
        'image/vnd.xiff': { source: 'iana', extensions: ['xif'] },
        'image/vnd.zbrush.pcx': { source: 'iana' },
        'image/webp': { source: 'apache', extensions: ['webp'] },
        'image/wmf': { source: 'iana' },
        'image/x-3ds': { source: 'apache', extensions: ['3ds'] },
        'image/x-cmu-raster': { source: 'apache', extensions: ['ras'] },
        'image/x-cmx': { source: 'apache', extensions: ['cmx'] },
        'image/x-freehand': {
          source: 'apache',
          extensions: ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
        },
        'image/x-icon': {
          source: 'apache',
          compressible: !0,
          extensions: ['ico'],
        },
        'image/x-jng': { source: 'nginx', extensions: ['jng'] },
        'image/x-mrsid-image': { source: 'apache', extensions: ['sid'] },
        'image/x-ms-bmp': {
          source: 'nginx',
          compressible: !0,
          extensions: ['bmp'],
        },
        'image/x-pcx': { source: 'apache', extensions: ['pcx'] },
        'image/x-pict': { source: 'apache', extensions: ['pic', 'pct'] },
        'image/x-portable-anymap': { source: 'apache', extensions: ['pnm'] },
        'image/x-portable-bitmap': { source: 'apache', extensions: ['pbm'] },
        'image/x-portable-graymap': { source: 'apache', extensions: ['pgm'] },
        'image/x-portable-pixmap': { source: 'apache', extensions: ['ppm'] },
        'image/x-rgb': { source: 'apache', extensions: ['rgb'] },
        'image/x-tga': { source: 'apache', extensions: ['tga'] },
        'image/x-xbitmap': { source: 'apache', extensions: ['xbm'] },
        'image/x-xcf': { compressible: !1 },
        'image/x-xpixmap': { source: 'apache', extensions: ['xpm'] },
        'image/x-xwindowdump': { source: 'apache', extensions: ['xwd'] },
        'message/cpim': { source: 'iana' },
        'message/delivery-status': { source: 'iana' },
        'message/disposition-notification': { source: 'iana' },
        'message/external-body': { source: 'iana' },
        'message/feedback-report': { source: 'iana' },
        'message/global': { source: 'iana' },
        'message/global-delivery-status': { source: 'iana' },
        'message/global-disposition-notification': { source: 'iana' },
        'message/global-headers': { source: 'iana' },
        'message/http': { source: 'iana', compressible: !1 },
        'message/imdn+xml': { source: 'iana', compressible: !0 },
        'message/news': { source: 'iana' },
        'message/partial': { source: 'iana', compressible: !1 },
        'message/rfc822': {
          source: 'iana',
          compressible: !0,
          extensions: ['eml', 'mime'],
        },
        'message/s-http': { source: 'iana' },
        'message/sip': { source: 'iana' },
        'message/sipfrag': { source: 'iana' },
        'message/tracking-status': { source: 'iana' },
        'message/vnd.si.simp': { source: 'iana' },
        'message/vnd.wfa.wsc': { source: 'iana' },
        'model/3mf': { source: 'iana' },
        'model/gltf+json': {
          source: 'iana',
          compressible: !0,
          extensions: ['gltf'],
        },
        'model/gltf-binary': { compressible: !0, extensions: ['glb'] },
        'model/iges': {
          source: 'iana',
          compressible: !1,
          extensions: ['igs', 'iges'],
        },
        'model/mesh': {
          source: 'iana',
          compressible: !1,
          extensions: ['msh', 'mesh', 'silo'],
        },
        'model/vnd.collada+xml': { source: 'iana', extensions: ['dae'] },
        'model/vnd.dwf': { source: 'iana', extensions: ['dwf'] },
        'model/vnd.flatland.3dml': { source: 'iana' },
        'model/vnd.gdl': { source: 'iana', extensions: ['gdl'] },
        'model/vnd.gs-gdl': { source: 'apache' },
        'model/vnd.gs.gdl': { source: 'iana' },
        'model/vnd.gtw': { source: 'iana', extensions: ['gtw'] },
        'model/vnd.moml+xml': { source: 'iana' },
        'model/vnd.mts': { source: 'iana', extensions: ['mts'] },
        'model/vnd.opengex': { source: 'iana' },
        'model/vnd.parasolid.transmit.binary': { source: 'iana' },
        'model/vnd.parasolid.transmit.text': { source: 'iana' },
        'model/vnd.rosette.annotated-data-model': { source: 'iana' },
        'model/vnd.valve.source.compiled-map': { source: 'iana' },
        'model/vnd.vtu': { source: 'iana', extensions: ['vtu'] },
        'model/vrml': {
          source: 'iana',
          compressible: !1,
          extensions: ['wrl', 'vrml'],
        },
        'model/x3d+binary': {
          source: 'apache',
          compressible: !1,
          extensions: ['x3db', 'x3dbz'],
        },
        'model/x3d+fastinfoset': { source: 'iana' },
        'model/x3d+vrml': {
          source: 'apache',
          compressible: !1,
          extensions: ['x3dv', 'x3dvz'],
        },
        'model/x3d+xml': {
          source: 'iana',
          compressible: !0,
          extensions: ['x3d', 'x3dz'],
        },
        'model/x3d-vrml': { source: 'iana' },
        'multipart/alternative': { source: 'iana', compressible: !1 },
        'multipart/appledouble': { source: 'iana' },
        'multipart/byteranges': { source: 'iana' },
        'multipart/digest': { source: 'iana' },
        'multipart/encrypted': { source: 'iana', compressible: !1 },
        'multipart/form-data': { source: 'iana', compressible: !1 },
        'multipart/header-set': { source: 'iana' },
        'multipart/mixed': { source: 'iana', compressible: !1 },
        'multipart/parallel': { source: 'iana' },
        'multipart/related': { source: 'iana', compressible: !1 },
        'multipart/report': { source: 'iana' },
        'multipart/signed': { source: 'iana', compressible: !1 },
        'multipart/vnd.bint.med-plus': { source: 'iana' },
        'multipart/voice-message': { source: 'iana' },
        'multipart/x-mixed-replace': { source: 'iana' },
        'text/1d-interleaved-parityfec': { source: 'iana' },
        'text/cache-manifest': {
          source: 'iana',
          compressible: !0,
          extensions: ['appcache', 'manifest'],
        },
        'text/calendar': { source: 'iana', extensions: ['ics', 'ifb'] },
        'text/calender': { compressible: !0 },
        'text/cmd': { compressible: !0 },
        'text/coffeescript': { extensions: ['coffee', 'litcoffee'] },
        'text/css': {
          source: 'iana',
          charset: 'UTF-8',
          compressible: !0,
          extensions: ['css'],
        },
        'text/csv': { source: 'iana', compressible: !0, extensions: ['csv'] },
        'text/csv-schema': { source: 'iana' },
        'text/directory': { source: 'iana' },
        'text/dns': { source: 'iana' },
        'text/ecmascript': { source: 'iana' },
        'text/encaprtp': { source: 'iana' },
        'text/enriched': { source: 'iana' },
        'text/fwdred': { source: 'iana' },
        'text/grammar-ref-list': { source: 'iana' },
        'text/hjson': { extensions: ['hjson'] },
        'text/html': {
          source: 'iana',
          compressible: !0,
          extensions: ['html', 'htm', 'shtml'],
        },
        'text/jade': { extensions: ['jade'] },
        'text/javascript': { source: 'iana', compressible: !0 },
        'text/jcr-cnd': { source: 'iana' },
        'text/jsx': { compressible: !0, extensions: ['jsx'] },
        'text/less': { extensions: ['less'] },
        'text/markdown': {
          source: 'iana',
          compressible: !0,
          extensions: ['markdown', 'md'],
        },
        'text/mathml': { source: 'nginx', extensions: ['mml'] },
        'text/mizar': { source: 'iana' },
        'text/n3': { source: 'iana', compressible: !0, extensions: ['n3'] },
        'text/parameters': { source: 'iana' },
        'text/parityfec': { source: 'iana' },
        'text/plain': {
          source: 'iana',
          compressible: !0,
          extensions: [
            'txt',
            'text',
            'conf',
            'def',
            'list',
            'log',
            'in',
            'ini',
          ],
        },
        'text/provenance-notation': { source: 'iana' },
        'text/prs.fallenstein.rst': { source: 'iana' },
        'text/prs.lines.tag': { source: 'iana', extensions: ['dsc'] },
        'text/prs.prop.logic': { source: 'iana' },
        'text/raptorfec': { source: 'iana' },
        'text/red': { source: 'iana' },
        'text/rfc822-headers': { source: 'iana' },
        'text/richtext': {
          source: 'iana',
          compressible: !0,
          extensions: ['rtx'],
        },
        'text/rtf': { source: 'iana', compressible: !0, extensions: ['rtf'] },
        'text/rtp-enc-aescm128': { source: 'iana' },
        'text/rtploopback': { source: 'iana' },
        'text/rtx': { source: 'iana' },
        'text/sgml': { source: 'iana', extensions: ['sgml', 'sgm'] },
        'text/slim': { extensions: ['slim', 'slm'] },
        'text/strings': { source: 'iana' },
        'text/stylus': { extensions: ['stylus', 'styl'] },
        'text/t140': { source: 'iana' },
        'text/tab-separated-values': {
          source: 'iana',
          compressible: !0,
          extensions: ['tsv'],
        },
        'text/troff': {
          source: 'iana',
          extensions: ['t', 'tr', 'roff', 'man', 'me', 'ms'],
        },
        'text/turtle': { source: 'iana', extensions: ['ttl'] },
        'text/ulpfec': { source: 'iana' },
        'text/uri-list': {
          source: 'iana',
          compressible: !0,
          extensions: ['uri', 'uris', 'urls'],
        },
        'text/vcard': {
          source: 'iana',
          compressible: !0,
          extensions: ['vcard'],
        },
        'text/vnd.a': { source: 'iana' },
        'text/vnd.abc': { source: 'iana' },
        'text/vnd.ascii-art': { source: 'iana' },
        'text/vnd.curl': { source: 'iana', extensions: ['curl'] },
        'text/vnd.curl.dcurl': { source: 'apache', extensions: ['dcurl'] },
        'text/vnd.curl.mcurl': { source: 'apache', extensions: ['mcurl'] },
        'text/vnd.curl.scurl': { source: 'apache', extensions: ['scurl'] },
        'text/vnd.debian.copyright': { source: 'iana' },
        'text/vnd.dmclientscript': { source: 'iana' },
        'text/vnd.dvb.subtitle': { source: 'iana', extensions: ['sub'] },
        'text/vnd.esmertec.theme-descriptor': { source: 'iana' },
        'text/vnd.fly': { source: 'iana', extensions: ['fly'] },
        'text/vnd.fmi.flexstor': { source: 'iana', extensions: ['flx'] },
        'text/vnd.graphviz': { source: 'iana', extensions: ['gv'] },
        'text/vnd.in3d.3dml': { source: 'iana', extensions: ['3dml'] },
        'text/vnd.in3d.spot': { source: 'iana', extensions: ['spot'] },
        'text/vnd.iptc.newsml': { source: 'iana' },
        'text/vnd.iptc.nitf': { source: 'iana' },
        'text/vnd.latex-z': { source: 'iana' },
        'text/vnd.motorola.reflex': { source: 'iana' },
        'text/vnd.ms-mediapackage': { source: 'iana' },
        'text/vnd.net2phone.commcenter.command': { source: 'iana' },
        'text/vnd.radisys.msml-basic-layout': { source: 'iana' },
        'text/vnd.si.uricatalogue': { source: 'iana' },
        'text/vnd.sun.j2me.app-descriptor': {
          source: 'iana',
          extensions: ['jad'],
        },
        'text/vnd.trolltech.linguist': { source: 'iana' },
        'text/vnd.wap.si': { source: 'iana' },
        'text/vnd.wap.sl': { source: 'iana' },
        'text/vnd.wap.wml': { source: 'iana', extensions: ['wml'] },
        'text/vnd.wap.wmlscript': { source: 'iana', extensions: ['wmls'] },
        'text/vtt': { charset: 'UTF-8', compressible: !0, extensions: ['vtt'] },
        'text/x-asm': { source: 'apache', extensions: ['s', 'asm'] },
        'text/x-c': {
          source: 'apache',
          extensions: ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
        },
        'text/x-component': { source: 'nginx', extensions: ['htc'] },
        'text/x-fortran': {
          source: 'apache',
          extensions: ['f', 'for', 'f77', 'f90'],
        },
        'text/x-gwt-rpc': { compressible: !0 },
        'text/x-handlebars-template': { extensions: ['hbs'] },
        'text/x-java-source': { source: 'apache', extensions: ['java'] },
        'text/x-jquery-tmpl': { compressible: !0 },
        'text/x-lua': { extensions: ['lua'] },
        'text/x-markdown': { compressible: !0, extensions: ['mkd'] },
        'text/x-nfo': { source: 'apache', extensions: ['nfo'] },
        'text/x-opml': { source: 'apache', extensions: ['opml'] },
        'text/x-org': { compressible: !0, extensions: ['org'] },
        'text/x-pascal': { source: 'apache', extensions: ['p', 'pas'] },
        'text/x-processing': { compressible: !0, extensions: ['pde'] },
        'text/x-sass': { extensions: ['sass'] },
        'text/x-scss': { extensions: ['scss'] },
        'text/x-setext': { source: 'apache', extensions: ['etx'] },
        'text/x-sfv': { source: 'apache', extensions: ['sfv'] },
        'text/x-suse-ymp': { compressible: !0, extensions: ['ymp'] },
        'text/x-uuencode': { source: 'apache', extensions: ['uu'] },
        'text/x-vcalendar': { source: 'apache', extensions: ['vcs'] },
        'text/x-vcard': { source: 'apache', extensions: ['vcf'] },
        'text/xml': { source: 'iana', compressible: !0, extensions: ['xml'] },
        'text/xml-external-parsed-entity': { source: 'iana' },
        'text/yaml': { extensions: ['yaml', 'yml'] },
        'video/1d-interleaved-parityfec': { source: 'iana' },
        'video/3gpp': { source: 'iana', extensions: ['3gp', '3gpp'] },
        'video/3gpp-tt': { source: 'iana' },
        'video/3gpp2': { source: 'iana', extensions: ['3g2'] },
        'video/bmpeg': { source: 'iana' },
        'video/bt656': { source: 'iana' },
        'video/celb': { source: 'iana' },
        'video/dv': { source: 'iana' },
        'video/encaprtp': { source: 'iana' },
        'video/h261': { source: 'iana', extensions: ['h261'] },
        'video/h263': { source: 'iana', extensions: ['h263'] },
        'video/h263-1998': { source: 'iana' },
        'video/h263-2000': { source: 'iana' },
        'video/h264': { source: 'iana', extensions: ['h264'] },
        'video/h264-rcdo': { source: 'iana' },
        'video/h264-svc': { source: 'iana' },
        'video/h265': { source: 'iana' },
        'video/iso.segment': { source: 'iana' },
        'video/jpeg': { source: 'iana', extensions: ['jpgv'] },
        'video/jpeg2000': { source: 'iana' },
        'video/jpm': { source: 'apache', extensions: ['jpm', 'jpgm'] },
        'video/mj2': { source: 'iana', extensions: ['mj2', 'mjp2'] },
        'video/mp1s': { source: 'iana' },
        'video/mp2p': { source: 'iana' },
        'video/mp2t': { source: 'iana', extensions: ['ts'] },
        'video/mp4': {
          source: 'iana',
          compressible: !1,
          extensions: ['mp4', 'mp4v', 'mpg4'],
        },
        'video/mp4v-es': { source: 'iana' },
        'video/mpeg': {
          source: 'iana',
          compressible: !1,
          extensions: ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
        },
        'video/mpeg4-generic': { source: 'iana' },
        'video/mpv': { source: 'iana' },
        'video/nv': { source: 'iana' },
        'video/ogg': { source: 'iana', compressible: !1, extensions: ['ogv'] },
        'video/parityfec': { source: 'iana' },
        'video/pointer': { source: 'iana' },
        'video/quicktime': {
          source: 'iana',
          compressible: !1,
          extensions: ['qt', 'mov'],
        },
        'video/raptorfec': { source: 'iana' },
        'video/raw': { source: 'iana' },
        'video/rtp-enc-aescm128': { source: 'iana' },
        'video/rtploopback': { source: 'iana' },
        'video/rtx': { source: 'iana' },
        'video/smpte292m': { source: 'iana' },
        'video/ulpfec': { source: 'iana' },
        'video/vc1': { source: 'iana' },
        'video/vnd.cctv': { source: 'iana' },
        'video/vnd.dece.hd': { source: 'iana', extensions: ['uvh', 'uvvh'] },
        'video/vnd.dece.mobile': {
          source: 'iana',
          extensions: ['uvm', 'uvvm'],
        },
        'video/vnd.dece.mp4': { source: 'iana' },
        'video/vnd.dece.pd': { source: 'iana', extensions: ['uvp', 'uvvp'] },
        'video/vnd.dece.sd': { source: 'iana', extensions: ['uvs', 'uvvs'] },
        'video/vnd.dece.video': { source: 'iana', extensions: ['uvv', 'uvvv'] },
        'video/vnd.directv.mpeg': { source: 'iana' },
        'video/vnd.directv.mpeg-tts': { source: 'iana' },
        'video/vnd.dlna.mpeg-tts': { source: 'iana' },
        'video/vnd.dvb.file': { source: 'iana', extensions: ['dvb'] },
        'video/vnd.fvt': { source: 'iana', extensions: ['fvt'] },
        'video/vnd.hns.video': { source: 'iana' },
        'video/vnd.iptvforum.1dparityfec-1010': { source: 'iana' },
        'video/vnd.iptvforum.1dparityfec-2005': { source: 'iana' },
        'video/vnd.iptvforum.2dparityfec-1010': { source: 'iana' },
        'video/vnd.iptvforum.2dparityfec-2005': { source: 'iana' },
        'video/vnd.iptvforum.ttsavc': { source: 'iana' },
        'video/vnd.iptvforum.ttsmpeg2': { source: 'iana' },
        'video/vnd.motorola.video': { source: 'iana' },
        'video/vnd.motorola.videop': { source: 'iana' },
        'video/vnd.mpegurl': { source: 'iana', extensions: ['mxu', 'm4u'] },
        'video/vnd.ms-playready.media.pyv': {
          source: 'iana',
          extensions: ['pyv'],
        },
        'video/vnd.nokia.interleaved-multimedia': { source: 'iana' },
        'video/vnd.nokia.videovoip': { source: 'iana' },
        'video/vnd.objectvideo': { source: 'iana' },
        'video/vnd.radgamettools.bink': { source: 'iana' },
        'video/vnd.radgamettools.smacker': { source: 'iana' },
        'video/vnd.sealed.mpeg1': { source: 'iana' },
        'video/vnd.sealed.mpeg4': { source: 'iana' },
        'video/vnd.sealed.swf': { source: 'iana' },
        'video/vnd.sealedmedia.softseal.mov': { source: 'iana' },
        'video/vnd.uvvu.mp4': { source: 'iana', extensions: ['uvu', 'uvvu'] },
        'video/vnd.vivo': { source: 'iana', extensions: ['viv'] },
        'video/vp8': { source: 'iana' },
        'video/webm': {
          source: 'apache',
          compressible: !1,
          extensions: ['webm'],
        },
        'video/x-f4v': { source: 'apache', extensions: ['f4v'] },
        'video/x-fli': { source: 'apache', extensions: ['fli'] },
        'video/x-flv': {
          source: 'apache',
          compressible: !1,
          extensions: ['flv'],
        },
        'video/x-m4v': { source: 'apache', extensions: ['m4v'] },
        'video/x-matroska': {
          source: 'apache',
          compressible: !1,
          extensions: ['mkv', 'mk3d', 'mks'],
        },
        'video/x-mng': { source: 'apache', extensions: ['mng'] },
        'video/x-ms-asf': { source: 'apache', extensions: ['asf', 'asx'] },
        'video/x-ms-vob': { source: 'apache', extensions: ['vob'] },
        'video/x-ms-wm': { source: 'apache', extensions: ['wm'] },
        'video/x-ms-wmv': {
          source: 'apache',
          compressible: !1,
          extensions: ['wmv'],
        },
        'video/x-ms-wmx': { source: 'apache', extensions: ['wmx'] },
        'video/x-ms-wvx': { source: 'apache', extensions: ['wvx'] },
        'video/x-msvideo': { source: 'apache', extensions: ['avi'] },
        'video/x-sgi-movie': { source: 'apache', extensions: ['movie'] },
        'video/x-smv': { source: 'apache', extensions: ['smv'] },
        'x-conference/x-cooltalk': { source: 'apache', extensions: ['ice'] },
        'x-shader/x-fragment': { compressible: !0 },
        'x-shader/x-vertex': { compressible: !0 },
      };
      /***/
    },
    /* 103 */
    /***/ function (e, t, n) {
      e.exports = { parallel: n(104), serial: n(106), serialOrdered: n(48) };
      /***/
    },
    /* 104 */
    /***/ function (e, t, n) {
      var a = n(43),
        i = n(46),
        o = n(47);
      // Public API
      e.exports =
        /**
         * Runs iterator over provided array elements in parallel
         *
         * @param   {array|object} list - array or object (named list) to iterate over
         * @param   {function} iterator - iterator to run
         * @param   {function} callback - invoked when all elements processed
         * @returns {function} - jobs terminator
         */
        function (e, t, n) {
          var r = i(e);
          for (; r.index < (r.keyedList || e).length; )
            a(e, t, r, function (e, t) {
              e
                ? n(e, t)
                : // looks like it's the last one
                  0 !== Object.keys(r.jobs).length || n(null, r.results);
            }),
              r.index++;
          return o.bind(r, n);
        };
      /***/
    },
    /* 105 */
    /***/ function (e, t) {
      e.exports =
        /**
         * Runs provided function on next iteration of the event loop
         *
         * @param {function} fn - function to run
         */
        function (e) {
          var t =
            'function' == typeof setImmediate
              ? setImmediate
              : 'object' == typeof process &&
                'function' == typeof process.nextTick
              ? process.nextTick
              : null;
          t ? t(e) : setTimeout(e, 0);
        };
      /***/
    },
    /* 106 */
    /***/ function (e, t, n) {
      var a = n(48);
      // Public API
      e.exports =
        /**
         * Runs iterator over provided array elements in series
         *
         * @param   {array|object} list - array or object (named list) to iterate over
         * @param   {function} iterator - iterator to run
         * @param   {function} callback - invoked when all elements processed
         * @returns {function} - jobs terminator
         */
        function (e, t, n) {
          return a(e, t, null, n);
        };
      /***/
    },
    /* 107 */
    /***/ function (e, t) {
      // populates missing values
      e.exports = function (e, t) {
        return (
          Object.keys(t).forEach(function (n) {
            e[n] = e[n] || t[n];
          }),
          e
        );
      };
      /***/
    },
    /* 108 */
    /***/ function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            // module.parent = undefined by default
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
      /***/
    },
    /* 109 */
    /***/ function (e, t, n) {
      var a = n(110),
        i = 'object' == typeof self && self && self.Object === Object && self,
        o = a || i || Function('return this')();
      /** Detect free variable `self`. */ e.exports = o;
    },
    /* 110 */
    /***/ function (e, t) {
      /** Detect free variable `global` from Node.js. */
      var n =
        'object' == typeof global &&
        global &&
        global.Object === Object &&
        global;
      e.exports = n;
    },
    /* 111 */
    /***/ function (e, t, n) {
      var a = n(49),
        i = Object.prototype,
        o = i.hasOwnProperty,
        r = i.toString,
        s = a ? a.toStringTag : void 0;
      /** Used for built-in method references. */ e.exports =
        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function (e) {
          var t = o.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var a = !0;
          } catch (e) {}
          var i = r.call(e);
          return a && (t ? (e[s] = n) : delete e[s]), i;
        };
    },
    /* 112 */
    /***/ function (e, t) {
      /** Used for built-in method references. */
      var n = Object.prototype.toString;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */ e.exports =
        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function (e) {
          return n.call(e);
        };
    },
    /* 113 */
    /***/ function (e, t, n) {
      var a = n(114);
      /**
       * Checks if `value` is an integer.
       *
       * **Note:** This method is based on
       * [`Number.isInteger`](https://mdn.io/Number/isInteger).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
       * @example
       *
       * _.isInteger(3);
       * // => true
       *
       * _.isInteger(Number.MIN_VALUE);
       * // => false
       *
       * _.isInteger(Infinity);
       * // => false
       *
       * _.isInteger('3');
       * // => false
       */ e.exports = function (e) {
        return 'number' == typeof e && e == a(e);
      };
    },
    /* 114 */
    /***/ function (e, t, n) {
      var a = n(115);
      /**
       * Converts `value` to an integer.
       *
       * **Note:** This method is loosely based on
       * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {number} Returns the converted integer.
       * @example
       *
       * _.toInteger(3.2);
       * // => 3
       *
       * _.toInteger(Number.MIN_VALUE);
       * // => 0
       *
       * _.toInteger(Infinity);
       * // => 1.7976931348623157e+308
       *
       * _.toInteger('3.2');
       * // => 3
       */ e.exports = function (e) {
        var t = a(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
    },
    /* 115 */
    /***/ function (e, t, n) {
      var a = n(116),
        i = 1 / 0,
        o = 1.7976931348623157e308;
      /** Used as references for various `Number` constants. */ e.exports =
        /**
         * Converts `value` to a finite number.
         *
         * @static
         * @memberOf _
         * @since 4.12.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        function (e) {
          return e
            ? (e = a(e)) === i || e === -i
              ? (e < 0 ? -1 : 1) * o
              : e == e
              ? e
              : 0
            : 0 === e
            ? e
            : 0;
        };
    },
    /* 116 */
    /***/ function (e, t, n) {
      var a = n(117),
        i = n(118),
        o = NaN,
        r = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        p = /^0o[0-7]+$/i,
        u = parseInt;
      /** Used as references for various `Number` constants. */ e.exports =
        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3.2);
         * // => 3.2
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3.2');
         * // => 3.2
         */
        function (e) {
          if ('number' == typeof e) return e;
          if (i(e)) return o;
          if (a(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = a(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, '');
          var n = c.test(e);
          return n || p.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e;
        };
    },
    /* 117 */
    /***/ function (e, t) {
      e.exports =
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function (e) {
          var t = typeof e;
          return null != e && ('object' == t || 'function' == t);
        };
    },
    /* 118 */
    /***/ function (e, t, n) {
      var a = n(27),
        i = n(28),
        o = '[object Symbol]';
      /** `Object#toString` result references. */ e.exports =
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function (e) {
          return 'symbol' == typeof e || (i(e) && a(e) == o);
        };
    },
    /* 119 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(12),
        o = n(6);
      e.exports = class extends i {
        constructor(e, t) {
          super(t), (this._groupID = e);
        }
        save() {
          let e = o(this._record);
          return (
            this._recordValueInit(),
            a.content.createContent(this._groupID, e.$set)
          );
        }
        update() {
          let e = o(this._record);
          return (
            this._recordValueInit(),
            a.content.updateContent(this._groupID, this._recordID, e.$set)
          );
        }
      };
    },
    /* 120 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(0),
        o = n(1),
        r = n(3);
      e.exports = class extends o {
        static get(e) {
          return i.contentGroup.getContentGroup(e);
        }
        static find({ offset: e = 0, limit: t = 20, withCount: n = !0 } = {}) {
          return i.contentGroup.getContentGroups({
            offset: e,
            limit: t,
            return_total_count: n ? 1 : 0,
          });
        }
        constructor(e) {
          super(), (this._contentGroupID = e);
        }
        getContent(e) {
          return i.contentGroup.getContent(this._contentGroupID, e);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = r.getWithCountDefaultValue() } = {}) {
          let t = this._contentGroupID,
            n = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            i.contentGroup.getContents(
              t,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, n, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        getCategory(e) {
          return i.contentGroup.getCategory(this._contentGroupID, e);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ getCategoryList({
          withCount: e = r.getWithCountDefaultValue(),
        } = {}) {
          return i.contentGroup.getCategories(this._contentGroupID, {
            return_total_count: e ? 1 : 0,
          });
        }
      };
    },
    /* 121 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(0),
        o = n(1),
        r = n(3);
      e.exports = class extends o {
        constructor(e) {
          super(), (this._groupID = e);
        }
        get(e) {
          return i.content.getCategory(this._groupID, e);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = r.getWithCountDefaultValue() } = {}) {
          let t = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            i.content.getCategories(
              this._groupID,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, t, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        create(e) {
          return i.content.createCategory(this._groupID, e);
        }
        update(e, t) {
          return i.content.updateCategory(this._groupID, e, t);
        }
        delete(e) {
          return i.content.deleteCategory(this._groupID, e);
        }
      };
    },
    /* 122 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(0),
        o = n(1),
        r = n(3);
      e.exports = class extends o {
        constructor() {
          super();
        }
        delete(e) {
          return e instanceof Array
            ? i.file.deleteFile(e.join(','))
            : i.file.deleteFile(e);
        }
        get(e) {
          return i.file.getFile(e);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = r.getWithCountDefaultValue() } = {}) {
          let t = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            i.file.getFiles(
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, t, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        createDownloadTask(...e) {
          return i.file.createDownloadTask(...e);
        }
        getDownloadTaskResult(...e) {
          return i.file.getDownloadTaskResult(...e);
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        upload(e, t) {
          return i.file.uploadFile(e, t);
        }
        purgeCache(e, t) {
          return i.file.purgeCache(e, t);
        }
        getPurgeCacheHistory(e) {
          return i.file.getPurgeCacheHistory(e);
        }
      };
    },
    /* 123 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(0),
        o = n(1),
        r = n(3);
      e.exports = class extends o {
        constructor() {
          super();
        }
        get(e) {
          return i.file.getCategory(e);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = r.getWithCountDefaultValue() } = {}) {
          let t = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            i.file.getCategories(
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, t, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        create(e) {
          return i.file.createCategory(e);
        }
        update(e, t) {
          return i.file.updateCategory(e, t);
        }
        delete(e) {
          return i.file.deleteCategory(e);
        }
      };
    },
    /* 124 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(0),
        o = n(1),
        r = n(5),
        s = n(11),
        c = n(3),
        p = n(125),
        u = n(6),
        l = n(50),
        d = n(51),
        m = n(26),
        f = n(12);
      e.exports = class extends o {
        constructor(e) {
          super(), (this._tableID = e);
        }
        create() {
          return new p(this._tableID);
        }
        createMany(e, { enableTrigger: t = !0 } = {}) {
          const n = f._serializeValueFuncFactory(['BaseRecord']);
          if (l(e))
            return i.schema.createBatchRecord(
              this._tableID,
              e.map(
                e => (
                  Object.keys(e).forEach(t => {
                    e[t] = n(e[t]);
                  }),
                  e
                ),
              ),
              { params: { enable_trigger: t ? 1 : 0 } },
            );
          throw new r(605);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ delete(
          e,
          {
            enableTrigger: t = !0,
            withCount: n = c.getWithCountDefaultValue(),
          } = {},
        ) {
          if (m(e) || d(e)) return i.schema.deleteRecord(this._tableID, e);
          if (e instanceof s) {
            const a = {
              limit: c.getLimitationWithEnableTigger(this._limit, t),
              offset: this._offset,
              where: JSON.stringify(e.queryObject),
              enable_trigger: t ? 1 : 0,
              return_total_count: n ? 1 : 0,
            };
            return (
              this._initQueryParams(),
              i.schema.deleteBatchRecord(this._tableID, a)
            );
          }
          throw new r(605);
        }
        getWithoutData(e) {
          if ((m(e) && '' !== e.trim()) || d(e)) return new p(this._tableID, e);
          if (e instanceof s) {
            let t = {};
            return (
              (t.limit = this._limit),
              (t.offset = this._offset),
              (t.where = u(e.queryObject)),
              this._initQueryParams(),
              new p(this._tableID, null, t)
            );
          }
          throw new r(605);
        }
        get(e) {
          let t = {};
          return (
            this._expand && (t.expand = this._expand),
            this._keys && (t.keys = this._keys),
            this._initQueryParams(),
            i.schema.getRecord(this._tableID, e, t)
          );
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = c.getWithCountDefaultValue() } = {}) {
          let t = this._tableID,
            n = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            i.schema.getRecords(
              t,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, n, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        importData({ dataFileUrl: e, dataFile: t }, n) {
          return i.schema.importData(
            this._tableID,
            { dataFileUrl: e, dataFile: t },
            n,
          );
        }
        exportData(e, t, n, a) {
          return (
            n && (n = c.getTimestamp(n)),
            a && (a = c.getTimestamp(a)),
            i.schema.exportData(this._tableID, e, t, n, a)
          );
        }
      };
    },
    /* 125 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(12),
        o = n(6),
        r = n(3);
      e.exports = class extends i {
        constructor(e, t, n = {}) {
          super(t), (this._tableID = e), (this._queryObject = n);
        }
        save() {
          let e = o(this._record);
          return (
            this._recordValueInit(),
            a.schema.createRecord(this._tableID, e.$set)
          );
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ update({
          enableTrigger: e = !0,
          withCount: t = r.getWithCountDefaultValue(),
        } = {}) {
          let n = o(this._record);
          if ((this._recordValueInit(), null != this._recordID)) {
            const t = { enable_trigger: e ? 1 : 0 };
            return a.schema.updateRecord(this._tableID, this._recordID, n, t);
          }
          {
            const i = {
              tableID: this._tableID,
              limit: r.getLimitationWithEnableTigger(
                this._queryObject.limit,
                e,
              ),
              offset: this._queryObject.offset,
              where: JSON.stringify(this._queryObject.where),
              enable_trigger: e ? 1 : 0,
              return_total_count: t ? 1 : 0,
            };
            return (
              (this._queryObject = {}),
              a.schema.updateBatchRecord(this._tableID, i, n)
            );
          }
        }
      };
    },
    /* 126 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const i = n(26),
        o = n(51),
        r = n(6),
        s = n(11),
        c = n(0),
        p = n(1),
        u = n(127),
        l = '_group',
        d = n(5),
        m = n(3);
      /**
       * 剥离 _group 查询
       * @param queryObj
       */
      function f(e) {
        return (function e(t) {
          if (Array.isArray(t))
            for (let n = 0; n < t.length; n++) {
              let a = e(t[n]);
              if (a) return a;
            }
          else if ('object' == typeof t) {
            let n = Object.keys(t);
            for (let a = 0; a < n.length; a++) {
              let i = n[a];
              if (i === l) {
                // 只处理 $in 查询，其他查询将被忽略
                if (t[i].$in && Array.isArray(t[i].$in)) {
                  let e = t[i].$in.join(',');
                  return delete t[i], e;
                }
              } else {
                let n = e(t[i]);
                if (n) return n;
              }
            }
          }
        })(e);
      }
      class h extends p {
        constructor() {
          super();
        }
        create() {
          return new u();
        }
        get(e) {
          let t = {};
          return (
            this._expand && (t.expand = this._expand),
            this._keys && (t.keys = this._keys),
            this._initQueryParams(),
            c.user.getUser(e, { params: t })
          );
        }
        getWithoutData(e) {
          if (i(e) || o(e)) return new u(e);
          if (e instanceof s) {
            let t = {};
            return (
              (t.limit = this._limit),
              (t.offset = this._offset),
              (t.where = r(e.queryObject)),
              this._initQueryParams(),
              new u(null, t)
            );
          }
          throw new d(605);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ find({ withCount: e = m.getWithCountDefaultValue() } = {}) {
          let t = f(this._queryObject),
            n = this._handleAllQueryConditions();
          return (
            t && (n.group__in = t),
            this._initQueryParams(),
            c.user.getUsers(
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? a(n, !0).forEach(function (t) {
                        var a, i, o;
                        (a = e),
                          (i = t),
                          (o = n[t]),
                          i in a
                            ? Object.defineProperty(a, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (a[i] = o);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : a(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
                }
                return e;
              })({}, n, { return_total_count: e ? 1 : 0 }),
            )
          );
        }
        count() {
          return this.limit(1)
            .find({ withCount: !0 })
            .then(e => {
              let { total_count: t } = e.data.meta;
              return t;
            });
        }
        delete(e) {
          if (i(e) || o(e)) return c.user.deleteUser(e);
          throw new d(605);
        }
      } //export for test
      (h._stripGroupQuery = f), (e.exports = h);
    },
    /* 127 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(5),
        o = n(12),
        r = n(6),
        s = n(3);
      e.exports = class extends o {
        constructor(e, t = {}) {
          super(e), (this._queryObject = t);
        }
        save() {
          // 通过 User.getWithoutData 接口获取的实例无法调用该接口。
          if (this._recordID || Object.keys(this._queryObject).length)
            throw new i(609);
          let e = r(this._record);
          return this._recordValueInit(), a.user.createUser(e.$set);
        }
        /**
         * 设置 withCount 默认值为 true，以兼容旧的用法
         */ update({
          enableTrigger: e = !0,
          withCount: t = s.getWithCountDefaultValue(),
        } = {}) {
          let n = r(this._record);
          if ((this._recordValueInit(), this._recordID))
            return a.user.updateUser(this._recordID, n.$set);
          {
            const i = {
              limit: s.getLimitationWithEnableTigger(
                this._queryObject.limit,
                e,
              ),
              offset: this._queryObject.offset,
              where: JSON.stringify(this._queryObject.where),
              enable_trigger: e ? 1 : 0,
              return_total_count: t ? 1 : 0,
            };
            return (this._queryObject = {}), a.user.updateBatchUser(i, n);
          }
        }
        setAccount(e) {
          return this._recordValueInit(), a.user.setAccount(this._recordID, e);
        }
      };
    },
    /* 128 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        constructor() {
          super();
        }
        /**
         * 获取用户组信息
         * @param groupID
         * @return {*}
         */ get(e) {
          return a.userGroup.getUserGroup(e);
        }
        /**
         * 创建用户组
         * @param name
         * @param parent
         */ create({ name: e, parent: t }) {
          return a.userGroup.createUserGroup({ name: e, parent: t });
        }
        /**
         * 修改用户组
         * @param groupID
         * @param data
         */ update(e, t) {
          return a.userGroup.updateUserGroup(e, t);
        }
        /**
         * 批量删除用户组
         * @param {Array} ids
         */ delete(e) {
          return (
            Array.isArray(e) && (e = e.join(',')),
            a.userGroup.deleteUserGroup({ id__in: e })
          );
        }
        /**
         * 将用户加入组
         * @param users
         * @param groups
         */ addUserIntoGroup(e, t) {
          return a.userGroup.memberShip({ op: 'add', users: e, groups: t });
        }
        /**
         * 将用户移除用户组
         * @param users
         * @param groups
         */ removeUserFromGroup(e, t) {
          return a.userGroup.memberShip({ op: 'remove', users: e, groups: t });
        }
        /**
         * 查询用户组
         * @param parentID 用户组的组集 ID
         * @return {*}
         */ getUserGroupList({ parentID: e }) {
          let t = this._handleAllQueryConditions();
          return (
            this._initQueryParams(),
            e && (t.parent_id = e),
            a.userGroup.getUserGroupList(t)
          );
        }
      };
    },
    /* 129 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        constructor() {
          super();
        }
        /**
         * 获取特定的组集信息
         * @param superGroupID
         * @return {*}
         */ get(e) {
          return a.superGroup.getSuperGroup(e);
        }
        /**
         * 创建组集
         * @param name 组集的名称
         * @param children 用户组 ID 列表
         */ create({ name: e, children: t }) {
          return a.superGroup.createSuperGroup({ name: e, children: t });
        }
        /**
         * 修改组集
         * @param id
         * @param data
         * @param data.name 组集名称
         * @param data.children 用户组 ID 列表
         */ update(e, t) {
          return a.superGroup.updateSuperGroup(e, t);
        }
        /**
         * 批量删除组集
         * @param ids
         */ delete(e) {
          return (
            Array.isArray(e) && (e = e.join(',')),
            a.superGroup.deleteSuperGroup({ id__in: e })
          );
        }
        /**
         * 获取组集列表
         * @return {*}
         */ getUserSuperGroupList() {
          let e = this._handleAllQueryConditions();
          return this._initQueryParams(), a.superGroup.getSuperGroupList(e);
        }
      };
    },
    /* 130 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1),
        o = {
          profitSharing: a.wechatPayProfitSharing,
          multiProfitSharing: a.wechatPayMultiProfitSharing,
        },
        r = { profitSharing: a.alipayProfitSharing };
      e.exports = class extends i {
        get wechatPay() {
          return o;
        }
        get alipay() {
          return r;
        }
        getOrderList(e = {}) {
          let t = Object.assign({}, this._handleAllQueryConditions(), e);
          return this._initQueryParams(), a.getOrderList(t);
        }
      };
    },
    /* 131 */
    /***/ function (e, t, n) {
      const a = n(0);
      e.exports = class {
        getSchema(...e) {
          return a.tableSchema.getSchema(...e);
        }
        getSchemaList(...e) {
          return a.tableSchema.getSchemaList(...e);
        }
        updateSchema(...e) {
          return a.tableSchema.updateSchema(...e);
        }
        createSchema(...e) {
          return a.tableSchema.createSchema(...e);
        }
        deleteSchema(...e) {
          return a.tableSchema.deleteSchema(...e);
        }
      };
    },
    /* 132 */
    /***/ function (e, t, n) {
      /**
       * 数据表云函数校验器。
       *
       * @example
       *
       * BaaS.useVersion('v3.4')
       * exports.main = async function (event) {
       *   const handlers = {
       *     async onCreate(data) {
       *       return true
       *     },
       *     async onUpdate(data) {
       *       return true
       *     },
       *     async onDelete(data) {
       *       return true
       *     },
       *     async onBulkCreate(data) {
       *       return true
       *     },
       *     async onBulkUpdate(data) {
       *       return true
       *     },
       *     async onBulkDelete(data) {
       *       return true
       *     },
       *   }
       *   const validator = new BaaS.Validator(handlers)
       *   return validator.validate(event)
       * }
       *
       * 或者：
       *
       * BaaS.useVersion('v3.4')
       * exports.main = async function (event) {
       *   const validator = new BaaS.Validator()
       *   validator.onCreate = async data => true
       *   validator.onUpdate = async data => true
       *   validator.onDelete = async data => true
       *   validator.onBulkCreate = async data => true
       *   validator.onBulkUpdate = async data => true
       *   validator.onBulkDelete = async data => true
       *   return validator.validate(event)
       * }
       */
      const a = n(3),
        i = e =>
          new Proxy(e, {
            set(e, t, n) {
              if (t.startsWith('on') && 'function' == typeof n)
                return (e._handlers[t] = n), !0;
            },
          });
      e.exports = class {
        constructor(e) {
          return (this._handlers = e || {}), i(this);
        }
        _defaultHandler() {
          return !0;
        }
        _getHandler(e) {
          const t = a.snakeCaseToCamelCase('on_' + e),
            n = this._handlers[t];
          return n || this._defaultHandler;
        }
        validate(e) {
          const t = e.data ? e.data : e;
          return this._getHandler(t.event)(t);
        }
      };
    },
    /* 133 */
    /***/ function (e, t, n) {
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(n, !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const r = n(0),
        s = n(13),
        c = n(3);
      e.exports = {
        invokeFunction: function (e, t, n = !0) {
          return r.invokeFunction(e, t, n);
        },
        invoke: function (e, t, n = !0) {
          return r.invokeFunction(e, t, n).then(e => e.data);
        },
        sendEmail: function (e) {
          return r.sendEmail(e);
        },
        sendTemplateMessage: function (e) {
          return (
            (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.WECHAT),
            r.sendTemplateMessage(e)
          );
        },
        sendAlipayTemplateMessage: function (e) {
          return (
            ((e = c.normalizeTemplageMsgParams(e)).platform =
              s.TEMPLATE_MESSAGE_PLATFORM.ALIPAY),
            r.sendTemplateMessage(e)
          );
        },
        sendQQTemplateMessage: function (e) {
          return (
            ((e = c.normalizeTemplageMsgParams(e)).platform =
              s.TEMPLATE_MESSAGE_PLATFORM.QQ),
            r.sendTemplateMessage(e)
          );
        },
        sendBaiduTemplateMessage: function (e) {
          return (
            ((e = c.normalizeTemplageMsgParams(e)).platform =
              s.TEMPLATE_MESSAGE_PLATFORM.BAIDU),
            r.sendTemplateMessage(e)
          );
        },
        sendBytedanceTemplateMessage: function (e) {
          return (
            (e.platform = e.app_name),
            delete e.app_name,
            (e = c.normalizeTemplageMsgParams(e)),
            r.sendTemplateMessage(e)
          );
        },
        getOrderList: function (e) {
          return r.getOrderList(e);
        },
        refund: function (e) {
          return r.refund(e);
        },
        wxAccessToken: e =>
          r.getEncryptedAccessToken().then(t => {
            let { encrypted_access_token: n, iv: a, expires_in: i } = t.data;
            return { access_token: c.aes256cbcDecrypt(e, a, n), expires_in: i };
          }),
        wxCensorImage: e => r.wxCensorImage({ file_id: e }),
        wxCensorText: e => r.wxCensorText({ content: e }),
        wxDecryptData: e => r.wxDecryptData(e),
        qqCensorImage: e => r.qqCensorImage({ file_id: e }),
        qqCensorText: e => r.qqCensorText({ content: e }),
        alipayCensorText: e => r.alipayCensorText({ content: e }),
        wxPromotionTransfer: e => r.wxPromotionTransfer(e),
        sendSmsCode: e => r.sendSmsCode(e),
        sendSmsMessage: e => r.sendSmsMessage(e),
        verifySmsCode: ({ phone: e, code: t, userID: n }) =>
          r.verifySmsCode({ phone: e, code: t, userID: n }),
        updateWeChatUserInfo: (e, t, { syncUserProfile: n = 'setnx' } = {}) =>
          r.updateWeChatUserInfo(
            i({}, t.userInfo, { update_userprofile: n, user_id: e }),
          ),
        getWXACode: (e, t, n, a) =>
          r
            .getWXACode(e, t, n, a)
            .then(
              e => (
                n &&
                  (e.data = i({}, e.data, {
                    download_url: e.data.uploaded_file.path,
                  })),
                e
              ),
            ),
        getTemplateMsgTicketCount: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.WECHAT),
          r.getTemplateMsgTicketCount(e)
        ),
        getAlipayTemplateMsgTicketCount: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.ALIPAY),
          (e = c.normalizeTemplageMsgParams(e)),
          r.getTemplateMsgTicketCount(e)
        ),
        getQQTemplateMsgTicketCount: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.QQ),
          (e = c.normalizeTemplageMsgParams(e)),
          r.getTemplateMsgTicketCount(e)
        ),
        getBaiduTemplateMsgTicketCount: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.BAIDU),
          (e = c.normalizeTemplageMsgParams(e)),
          r.getTemplateMsgTicketCount(e)
        ),
        getBytedanceTemplateMsgTicketCount: (e = {}) => (
          (e.platform = e.app_name),
          delete e.app_name,
          (e = c.normalizeTemplageMsgParams(e)),
          r.getTemplateMsgTicketCount(e)
        ),
        // 获取可用订阅记录数量
        getWxSubscribeMsgTicketCount: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.WECHAT),
          r.getSubscribeMsgTicketCount(e)
        ),
        getQQSubscribeMsgTicketCount: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.QQ),
          r.getSubscribeMsgTicketCount(e)
        ),
        // 发送订阅消息
        sendWechatSubscribeMessage: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.WECHAT),
          r.sendSubscribeMessage(e)
        ),
        sendQQSubscribeMessage: (e = {}) => (
          (e.platform = s.TEMPLATE_MESSAGE_PLATFORM.QQ),
          r.sendSubscribeMessage(e)
        ),
        getAlipayQRCode: e => r.getAlipayQRCode(e),
        getAsyncJobResult: e => r.getAsyncJobResult(e),
        // 获取微信用户安全等级
        getWxUserRiskRank: (e = {}) => r.getWxUserRiskRank(e),
        // 创建微信私密消息的activity_id
        createWxActivityID: (e = {}) => r.createWxActivityID(e),
      };
    },
    /* 134 */
    /***/ function (e, t, n) {
      const a = n(0);
      e.exports = class {
        sendRedPack(e) {
          return a.redPack.send(e);
        }
        getSentRedPackList(e) {
          return a.redPack.getList(e);
        }
        getSentRedPack(e) {
          return a.redPack.get(e);
        }
        getRedPackStatus(e) {
          return a.redPack.getStatus(e);
        }
      };
    },
    /* 135 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        get finish() {
          return a.wechatProfitSharingFinish;
        }
        get refund() {
          return a.wechatProfitSharingRefund;
        }
        get getRefundmentOrder() {
          return a.getWechatProfitSharingRefundmentOrder;
        }
        getOrderList(e = {}) {
          let t = Object.assign({}, this._handleAllQueryConditions(), e);
          return this._initQueryParams(), a.getWechatProfitSharingOrderList(t);
        }
      };
    },
    /* 136 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        getOrderList(e = {}) {
          let t = Object.assign({}, this._handleAllQueryConditions(), e);
          return this._initQueryParams(), a.getAlipayProfitSharingOrderList(t);
        }
      };
    },
    /* 137 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        getMobileTopUpList(e) {
          return a.getMobileTopUpList(e);
        }
        topUpMobile(e) {
          return a.topUpMobile(e);
        }
      };
    },
    /* 138 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        checkPeopleAlive(e) {
          return a.peopleAlive(e);
        }
      };
    },
    /* 139 */
    /***/ function (e, t, n) {
      const a = n(0),
        i = n(1);
      e.exports = class extends i {
        constructor() {
          super();
        }
        /**
         * 获取微信小程序 URL Scheme 码列表
         * @return {*}
         */ getUrlSchemeList() {
          let e = this._handleAllQueryConditions();
          return this._initQueryParams(), a.urlScheme.getUrlSchemes(e);
        }
        /**
         * 获取单个微信小程序 URL Scheme 码
         * @param id
         * @return {*}
         */ get(e) {
          return a.urlScheme.getUrlScheme(e);
        }
        /**
         * 创建单个微信小程序 URL Scheme 码
         * @param options
         */ generate(e = {}) {
          const { is_expire: t = !1, expire_time: n, jump_wxa: i } = e;
          return a.urlScheme.createUrlScheme({
            is_expire: t,
            expire_time: n,
            jump_wxa: i,
          });
        }
        /**
         * 删除单个微信小程序 URL Scheme 码
         * @param id
         */ delete(e) {
          return a.urlScheme.deleteUrlScheme(e);
        }
      };
    },
    /* 140 */
    /***/ function (e, t, n) {
      const a = n(41),
        i = n(8),
        o = n(52),
        r = n(42);
      let s = /\/sdk\/dist\/$/.test(__dirname)
          ? __dirname
          : i.resolve(__dirname, '../dist/'),
        c = r.versions[r.defaultVersionKey];
      e.exports = function (e) {
        // 低于默认版本，不引入
        if (!a.gt(a.valid(a.coerce(e)), a.valid(a.coerce(c)))) return;
        const t = o.sync(i.join(s, 'sdk-v*.js')).map(e => a.coerce(e)),
          n = a.maxSatisfying(t, e);
        if (!n) throw new Error(`SDK - BaaS@${e} not found.`);
        const r = require;
        global.BaaS = r(i.join(s, `sdk-v${n.version}.js`));
      };
    },
    /* 141 */
    /***/ function (e, t, n) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.
      var a = n(8),
        i = 'win32' === process.platform,
        o = n(9),
        r = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
      function s(e) {
        return 'function' == typeof e
          ? e
          : (function () {
              // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
              // is fairly slow to generate.
              var e;
              if (r) {
                var t = new Error();
                e = function (e) {
                  e && ((t.message = e.message), n((e = t)));
                };
              } else e = n;
              return e;
              function n(e) {
                if (e) {
                  if (process.throwDeprecation) throw e; // Forgot a callback but don't know where? Use NODE_DEBUG=fs
                  if (!process.noDeprecation) {
                    var t = 'fs: missing callback ' + (e.stack || e.message);
                    process.traceDeprecation
                      ? console.trace(t)
                      : console.error(t);
                  }
                }
              }
            })();
      }
      a.normalize;
      // Regexp that finds the next partion of a (partial) path
      // result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
      if (i) var c = /(.*?)(?:[\/\\]+|$)/g;
      else c = /(.*?)(?:[\/]+|$)/g;
      // Regex to find the device root, including trailing slash. E.g. 'c:\\'.
      if (i) var p = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
      else p = /^[\/]*/;
      (t.realpathSync = function (e, t) {
        if (
          // make p is absolute
          ((e = a.resolve(e)), t && Object.prototype.hasOwnProperty.call(t, e))
        )
          return t[e];
        var n,
          r,
          s,
          u,
          l = e,
          d = {},
          m = {};
        // current character position in p
        function f() {
          // Skip over roots
          var t = p.exec(e);
          (n = t[0].length),
            (r = t[0]),
            (s = t[0]),
            (u = ''),
            // On windows, check that the root exists. On unix there is no need.
            i && !m[s] && (o.lstatSync(s), (m[s] = !0));
        }
        // walk down the path, swapping out linked pathparts for their real
        // values
        // NB: p.length changes.
        for (f(); n < e.length; ) {
          // find the next part
          c.lastIndex = n;
          var h = c.exec(e);
          // continue if not a symlink
          if (
            ((u = r),
            (r += h[0]),
            (s = u + h[1]),
            (n = c.lastIndex),
            !(m[s] || (t && t[s] === s)))
          ) {
            var v;
            if (t && Object.prototype.hasOwnProperty.call(t, s))
              // some known symbolic link.  no need to stat again.
              v = t[s];
            else {
              var x = o.lstatSync(s);
              if (!x.isSymbolicLink()) {
                (m[s] = !0), t && (t[s] = s);
                continue;
              }
              // read the link if it wasn't read before
              // dev/ino always return 0 on windows, so skip the check.
              var g = null;
              if (!i) {
                var b = x.dev.toString(32) + ':' + x.ino.toString(32);
                d.hasOwnProperty(b) && (g = d[b]);
              }
              null === g && (o.statSync(s), (g = o.readlinkSync(s))),
                (v = a.resolve(u, g)),
                // track this, if given a cache.
                t && (t[s] = v),
                i || (d[b] = g);
            }
            // resolve the link, then start over
            (e = a.resolve(v, e.slice(n))), f();
          }
        }
        return t && (t[l] = e), e;
      }),
        (t.realpath = function (e, t, n) {
          if (
            ('function' != typeof n && ((n = s(t)), (t = null)),
            // make p is absolute
            (e = a.resolve(e)),
            t && Object.prototype.hasOwnProperty.call(t, e))
          )
            return process.nextTick(n.bind(null, null, t[e]));
          var r,
            u,
            l,
            d,
            m = e,
            f = {},
            h = {};
          // current character position in p
          function v() {
            // Skip over roots
            var t = p.exec(e);
            (r = t[0].length),
              (u = t[0]),
              (l = t[0]),
              (d = ''),
              // On windows, check that the root exists. On unix there is no need.
              i && !h[l]
                ? o.lstat(l, function (e) {
                    if (e) return n(e);
                    (h[l] = !0), x();
                  })
                : process.nextTick(x);
          }
          // walk down the path, swapping out linked pathparts for their real
          // values
          function x() {
            // stop if scanned past end of path
            if (r >= e.length) return t && (t[m] = e), n(null, e);
            // find the next part
            c.lastIndex = r;
            var a = c.exec(e);
            // continue if not a symlink
            return (
              (d = u),
              (u += a[0]),
              (l = d + a[1]),
              (r = c.lastIndex),
              h[l] || (t && t[l] === l)
                ? process.nextTick(x)
                : t && Object.prototype.hasOwnProperty.call(t, l)
                ? y(t[l])
                : o.lstat(l, g)
            );
          }
          function g(e, a) {
            if (e) return n(e);
            // if not a symlink, skip to the next path part
            if (!a.isSymbolicLink())
              return (h[l] = !0), t && (t[l] = l), process.nextTick(x);
            // stat & read the link if not read before
            // call gotTarget as soon as the link target is known
            // dev/ino always return 0 on windows, so skip the check.
            if (!i) {
              var r = a.dev.toString(32) + ':' + a.ino.toString(32);
              if (f.hasOwnProperty(r)) return b(null, f[r], l);
            }
            o.stat(l, function (e) {
              if (e) return n(e);
              o.readlink(l, function (e, t) {
                i || (f[r] = t), b(e, t);
              });
            });
          }
          function b(e, i, o) {
            if (e) return n(e);
            var r = a.resolve(d, i);
            t && (t[o] = r), y(r);
          }
          function y(t) {
            // resolve the link, then start over
            (e = a.resolve(t, e.slice(r))), v();
          }
          v();
        });
    },
    /* 142 */
    /***/ function (e, t, n) {
      var a = n(143),
        i = n(144);
      e.exports = function (e) {
        if (!e) return [];
        // I don't know why Bash 4.3 does this, but it does.
        // Anything starting with {} will have the first two bytes preserved
        // but *only* at the top level, so {},a}b will not expand to anything,
        // but a{},b}c will be expanded to [a}c,abc].
        // One could argue that this is a bug in Bash, but since the goal of
        // this module is to match Bash's rules, we escape a leading {}
        '{}' === e.substr(0, 2) && (e = '\\{\\}' + e.substr(2));
        return (function e(t, n) {
          var o = [];
          var r = i('{', '}', t);
          if (!r || /\$$/.test(r.pre)) return [t];
          var c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body);
          var p = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body);
          var l = c || p;
          var v = r.body.indexOf(',') >= 0;
          if (!l && !v)
            // {a},b}
            return r.post.match(/,.*\}/)
              ? ((t = r.pre + '{' + r.body + s + r.post), e(t))
              : [t];
          var x;
          if (l) x = r.body.split(/\.\./);
          else if (
            1 ===
              (x =
                // Basically just str.split(","), but handling cases
                // where we have nested braced sections, which should be
                // treated as individual members, like {a,{b,c},d}
                (function e(t) {
                  if (!t) return [''];
                  var n = [];
                  var a = i('{', '}', t);
                  if (!a) return t.split(',');
                  var o = a.pre;
                  var r = a.body;
                  var s = a.post;
                  var c = o.split(',');
                  c[c.length - 1] += '{' + r + '}';
                  var p = e(s);
                  s.length &&
                    ((c[c.length - 1] += p.shift()), c.push.apply(c, p));
                  n.push.apply(n, c);
                  return n;
                })(r.body)).length &&
            1 ===
              // x{{a,b}}y ==> x{a}y x{b}y
              (x = e(x[0], !1).map(d)).length
          ) {
            var g = r.post.length ? e(r.post, !1) : [''];
            return g.map(function (e) {
              return r.pre + x[0] + e;
            });
          }
          // at this point, n is the parts, and we know it's not a comma set
          // with a single entry.
          // no need to expand pre, since it is guaranteed to be free of brace-sets
          var b = r.pre;
          var g = r.post.length ? e(r.post, !1) : [''];
          var y;
          if (l) {
            var E = u(x[0]),
              _ = u(x[1]),
              w = Math.max(x[0].length, x[1].length),
              O = 3 == x.length ? Math.abs(u(x[2])) : 1,
              T = f,
              R = _ < E;
            R && ((O *= -1), (T = h));
            var C = x.some(m);
            y = [];
            for (var A = E; T(A, _); A += O) {
              var S;
              if (p) '\\' === (S = String.fromCharCode(A)) && (S = '');
              else if (((S = String(A)), C)) {
                var k = w - S.length;
                if (k > 0) {
                  var I = new Array(k + 1).join('0');
                  S = A < 0 ? '-' + I + S.slice(1) : I + S;
                }
              }
              y.push(S);
            }
          } else
            y = a(x, function (t) {
              return e(t, !1);
            });
          for (var j = 0; j < y.length; j++)
            for (var P = 0; P < g.length; P++) {
              var D = b + y[j] + g[P];
              (!n || l || D) && o.push(D);
            }
          return o;
        })(
          /***/ ((t = e),
          t
            .split('\\\\')
            .join(o)
            .split('\\{')
            .join(r)
            .split('\\}')
            .join(s)
            .split('\\,')
            .join(c)
            .split('\\.')
            .join(p)),
          !0,
        ).map(l);
        var t;
      };
      var o = '\0SLASH' + Math.random() + '\0',
        r = '\0OPEN' + Math.random() + '\0',
        s = '\0CLOSE' + Math.random() + '\0',
        c = '\0COMMA' + Math.random() + '\0',
        p = '\0PERIOD' + Math.random() + '\0';
      function u(e) {
        return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
      }
      function l(e) {
        return e
          .split(o)
          .join('\\')
          .split(r)
          .join('{')
          .split(s)
          .join('}')
          .split(c)
          .join(',')
          .split(p)
          .join('.');
      }
      function d(e) {
        return '{' + e + '}';
      }
      function m(e) {
        return /^-?0\d/.test(e);
      }
      function f(e, t) {
        return e <= t;
      }
      function h(e, t) {
        return e >= t;
      }
    },
    /* 143 */
    /***/ function (e, t) {
      e.exports = function (e, t) {
        for (var a = [], i = 0; i < e.length; i++) {
          var o = t(e[i], i);
          n(o) ? a.push.apply(a, o) : a.push(o);
        }
        return a;
      };
      var n =
        Array.isArray ||
        function (e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        };
      /***/
    },
    /* 144 */
    /***/ function (e, t, n) {
      'use strict';
      function a(e, t, n) {
        e instanceof RegExp && (e = i(e, n)),
          t instanceof RegExp && (t = i(t, n));
        var a = o(e, t, n);
        return (
          a && {
            start: a[0],
            end: a[1],
            pre: n.slice(0, a[0]),
            body: n.slice(a[0] + e.length, a[1]),
            post: n.slice(a[1] + t.length),
          }
        );
      }
      function i(e, t) {
        var n = t.match(e);
        return n ? n[0] : null;
      }
      function o(e, t, n) {
        var a,
          i,
          o,
          r,
          s,
          c = n.indexOf(e),
          p = n.indexOf(t, c + 1),
          u = c;
        if (c >= 0 && p > 0) {
          for (a = [], o = n.length; u >= 0 && !s; )
            u == c
              ? (a.push(u), (c = n.indexOf(e, u + 1)))
              : 1 == a.length
              ? (s = [a.pop(), p])
              : ((i = a.pop()) < o && ((o = i), (r = p)),
                (p = n.indexOf(t, u + 1))),
              (u = c < p && c >= 0 ? c : p);
          a.length && (s = [o, r]);
        }
        return s;
      }
      /***/ (e.exports = a), (a.range = o);
    },
    /* 145 */
    /***/ function (e, t, n) {
      try {
        var a = n(4);
        if ('function' != typeof a.inherits) throw '';
        e.exports = a.inherits;
      } catch (t) {
        e.exports = n(146);
      }
      /***/
    },
    /* 146 */
    /***/ function (e, t) {
      'function' == typeof Object.create
        ? // implementation from standard node.js 'util' module
          (e.exports = function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : // old school shim for old browsers
          (e.exports = function (e, t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          });
      /***/
    },
    /* 147 */
    /***/ function (e, t, n) {
      (e.exports = f), (f.GlobSync = h);
      var a = n(9),
        i = n(53),
        o = n(29),
        r = (o.Minimatch, n(52).Glob, n(4), n(8)),
        s = n(20),
        c = n(30),
        p = n(54),
        u = (p.alphasort, p.alphasorti, p.setopts),
        l = p.ownProp,
        d = p.childrenIgnored,
        m = p.isIgnored;
      function f(e, t) {
        if ('function' == typeof t || 3 === arguments.length)
          throw new TypeError(
            'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167',
          );
        return new h(e, t).found;
      }
      function h(e, t) {
        if (!e) throw new Error('must provide pattern');
        if ('function' == typeof t || 3 === arguments.length)
          throw new TypeError(
            'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167',
          );
        if (!(this instanceof h)) return new h(e, t);
        if ((u(this, e, t), this.noprocess)) return this;
        var n = this.minimatch.set.length;
        this.matches = new Array(n);
        for (var a = 0; a < n; a++) this._process(this.minimatch.set[a], a, !1);
        this._finish();
      }
      (h.prototype._finish = function () {
        if ((s(this instanceof h), this.realpath)) {
          var e = this;
          this.matches.forEach(function (t, n) {
            var a = (e.matches[n] = Object.create(null));
            for (var o in t)
              try {
                (o = e._makeAbs(o)),
                  (a[i.realpathSync(o, e.realpathCache)] = !0);
              } catch (t) {
                if ('stat' !== t.syscall) throw t;
                a[e._makeAbs(o)] = !0;
              }
          });
        }
        p.finish(this);
      }),
        (h.prototype._process = function (e, t, n) {
          s(this instanceof h);
          // Get the first [n] parts of pattern that are all strings.
          for (var a, i = 0; 'string' == typeof e[i]; ) i++;
          // now n is the index of the first one that is *not* a string.
          // See if there's anything else
          switch (i) {
            // if not, then this is rather simple
            case e.length:
              return void this._processSimple(e.join('/'), t);
            case 0:
              // pattern *starts* with some non-trivial item.
              // going to readdir(cwd), but not include the prefix in matches.
              a = null;
              break;
            default:
              // pattern has some string bits in the front.
              // whatever it starts with, whether that's 'absolute' like /foo/bar,
              // or 'relative' like '../baz'
              a = e.slice(0, i).join('/');
          }
          var r,
            p = e.slice(i);
          // get the list of entries.
          null === a
            ? (r = '.')
            : c(a) || c(e.join('/'))
            ? ((a && c(a)) || (a = '/' + a), (r = a))
            : (r = a);
          var u = this._makeAbs(r);
          //if ignored, skip processing
          d(this, r) ||
            (p[0] === o.GLOBSTAR
              ? this._processGlobStar(a, r, u, p, t, n)
              : this._processReaddir(a, r, u, p, t, n));
        }),
        (h.prototype._processReaddir = function (e, t, n, a, i, o) {
          var s = this._readdir(n, o);
          // if the abs isn't a dir, then nothing can match!
          if (s) {
            for (
              // It will only match dot entries if it starts with a dot, or if
              // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
              var c = a[0],
                p = !!this.minimatch.negate,
                u = c._glob,
                l = this.dot || '.' === u.charAt(0),
                d = [],
                m = 0;
              m < s.length;
              m++
            ) {
              if ('.' !== (v = s[m]).charAt(0) || l)
                (p && !e ? !v.match(c) : v.match(c)) && d.push(v);
            }
            var f = d.length;
            // If there are no matched entries, then nothing matches.
            if (0 !== f)
              if (1 !== a.length || this.mark || this.stat) {
                // if this is the last remaining pattern bit, then no need for
                // an additional stat *unless* the user has specified mark or
                // stat explicitly.  We know they exist, since readdir returned
                // them.
                // now test all matched entries as stand-ins for that part
                // of the pattern.
                a.shift();
                for (m = 0; m < f; m++) {
                  var h;
                  v = d[m];
                  (h = e ? [e, v] : [v]), this._process(h.concat(a), i, o);
                }
              } else {
                this.matches[i] || (this.matches[i] = Object.create(null));
                for (var m = 0; m < f; m++) {
                  var v = d[m];
                  e && (v = '/' !== e.slice(-1) ? e + '/' + v : e + v),
                    '/' !== v.charAt(0) ||
                      this.nomount ||
                      (v = r.join(this.root, v)),
                    this._emitMatch(i, v);
                }
                // This was the last one, and no stats were needed
              }
          }
        }),
        (h.prototype._emitMatch = function (e, t) {
          if (!m(this, t)) {
            var n = this._makeAbs(t);
            if (
              (this.mark && (t = this._mark(t)),
              this.absolute && (t = n),
              !this.matches[e][t])
            ) {
              if (this.nodir) {
                var a = this.cache[n];
                if ('DIR' === a || Array.isArray(a)) return;
              }
              (this.matches[e][t] = !0), this.stat && this._stat(t);
            }
          }
        }),
        (h.prototype._readdirInGlobStar = function (e) {
          // follow all symlinked directories forever
          // just proceed as if this is a non-globstar situation
          if (this.follow) return this._readdir(e, !1);
          var t, n;
          try {
            n = a.lstatSync(e);
          } catch (e) {
            if ('ENOENT' === e.code)
              // lstat failed, doesn't exist
              return null;
          }
          var i = n && n.isSymbolicLink();
          return (
            (this.symlinks[e] = i),
            // If it's not a symlink or a dir, then it's definitely a regular file.
            // don't bother doing a readdir in that case.
            i || !n || n.isDirectory()
              ? (t = this._readdir(e, !1))
              : (this.cache[e] = 'FILE'),
            t
          );
        }),
        (h.prototype._readdir = function (e, t) {
          if (t && !l(this.symlinks, e)) return this._readdirInGlobStar(e);
          if (l(this.cache, e)) {
            var n = this.cache[e];
            if (!n || 'FILE' === n) return null;
            if (Array.isArray(n)) return n;
          }
          try {
            return this._readdirEntries(e, a.readdirSync(e));
          } catch (t) {
            return this._readdirError(e, t), null;
          }
        }),
        (h.prototype._readdirEntries = function (e, t) {
          // if we haven't asked to stat everything, then just
          // assume that everything in there exists, so we can avoid
          // having to stat it a second time.
          if (!this.mark && !this.stat)
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a = '/' === e ? e + a : e + '/' + a), (this.cache[a] = !0);
            }
          // mark and cache dir-ness
          return (this.cache[e] = t), t;
        }),
        (h.prototype._readdirError = function (e, t) {
          // handle errors, and cache the information
          switch (t.code) {
            case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
            case 'ENOTDIR': // totally normal. means it *does* exist.
              var n = this._makeAbs(e);
              if (((this.cache[n] = 'FILE'), n === this.cwdAbs)) {
                var a = new Error(t.code + ' invalid cwd ' + this.cwd);
                throw ((a.path = this.cwd), (a.code = t.code), a);
              }
              break;
            case 'ENOENT': // not terribly unusual
            case 'ELOOP':
            case 'ENAMETOOLONG':
            case 'UNKNOWN':
              this.cache[this._makeAbs(e)] = !1;
              break;
            default:
              if (
                // some unusual error.  Treat as failure.
                ((this.cache[this._makeAbs(e)] = !1), this.strict)
              )
                throw t;
              this.silent || console.error('glob error', t);
          }
        }),
        (h.prototype._processGlobStar = function (e, t, n, a, i, o) {
          var r = this._readdir(n, o);
          // no entries means not a dir, so it can never have matches
          // foo.txt/** doesn't match foo.txt
          if (r) {
            // test without the globstar, and with every child both below
            // and replacing the globstar.
            var s = a.slice(1),
              c = e ? [e] : [],
              p = c.concat(s);
            // the noGlobStar pattern exits the inGlobStar state
            this._process(p, i, !1);
            var u = r.length;
            // If it's a symlink, and we're in a globstar, then stop
            if (!this.symlinks[n] || !o)
              for (var l = 0; l < u; l++) {
                if ('.' !== r[l].charAt(0) || this.dot) {
                  // these two cases enter the inGlobStar state
                  var d = c.concat(r[l], s);
                  this._process(d, i, !0);
                  var m = c.concat(r[l], a);
                  this._process(m, i, !0);
                }
              }
          }
        }),
        (h.prototype._processSimple = function (e, t) {
          // XXX review this.  Shouldn't it be doing the mounting etc
          // before doing stat?  kinda weird?
          var n = this._stat(e);
          // If it doesn't exist, then just mark the lack of results
          if ((this.matches[t] || (this.matches[t] = Object.create(null)), n)) {
            if (e && c(e) && !this.nomount) {
              var a = /[\/\\]$/.test(e);
              '/' === e.charAt(0)
                ? (e = r.join(this.root, e))
                : ((e = r.resolve(this.root, e)), a && (e += '/'));
            }
            'win32' === process.platform && (e = e.replace(/\\/g, '/')),
              // Mark this as a match
              this._emitMatch(t, e);
          }
        }),
        // Returns either 'DIR', 'FILE', or false
        (h.prototype._stat = function (e) {
          var t = this._makeAbs(e),
            n = '/' === e.slice(-1);
          if (e.length > this.maxLength) return !1;
          if (!this.stat && l(this.cache, t)) {
            var i = this.cache[t];
            // It exists, but maybe not how we need it
            if ((Array.isArray(i) && (i = 'DIR'), !n || 'DIR' === i)) return i;
            if (n && 'FILE' === i) return !1;
            // otherwise we have to stat, because maybe c=true
            // if we know it exists, but not what it is.
          }
          var o = this.statCache[t];
          if (!o) {
            var r;
            try {
              r = a.lstatSync(t);
            } catch (e) {
              if (e && ('ENOENT' === e.code || 'ENOTDIR' === e.code))
                return (this.statCache[t] = !1), !1;
            }
            if (r && r.isSymbolicLink())
              try {
                o = a.statSync(t);
              } catch (e) {
                o = r;
              }
            else o = r;
          }
          this.statCache[t] = o;
          i = !0;
          return (
            o && (i = o.isDirectory() ? 'DIR' : 'FILE'),
            (this.cache[t] = this.cache[t] || i),
            (!n || 'FILE' !== i) && i
          );
        }),
        (h.prototype._mark = function (e) {
          return p.mark(this, e);
        }),
        (h.prototype._makeAbs = function (e) {
          return p.makeAbs(this, e);
        });
      /***/
    },
    /* 148 */
    /***/ function (e, t, n) {
      var a = n(55),
        i = Object.create(null),
        o = n(56);
      e.exports = a(function (e, t) {
        return i[e]
          ? (i[e].push(t), null)
          : ((i[e] = [t]),
            (n = e),
            o(function e() {
              var t = i[n],
                a = t.length,
                o = (function (e) {
                  for (var t = e.length, n = [], a = 0; a < t; a++) n[a] = e[a];
                  return n;
                })(/***/ arguments);
              // XXX It's somewhat ambiguous whether a new callback added in this
              // pass should be queued for later execution if something in the
              // list of callbacks throws, or if it should just be discarded.
              // However, it's such an edge case that it hardly matters, and either
              // choice is likely as surprising as the other.
              // As it happens, we do go ahead and schedule it for later execution.
              try {
                for (var r = 0; r < a; r++) t[r].apply(null, o);
              } finally {
                t.length > a
                  ? // added more in the interim.
                    // de-zalgo, just in case, but don't call again.
                    (t.splice(0, a),
                    process.nextTick(function () {
                      e.apply(null, o);
                    }))
                  : delete i[n];
              }
            }));
        var n;
      });
    },
    /******/
  ],
);
