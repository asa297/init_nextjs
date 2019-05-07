const ORGANIZATION_MODULE = 'ORGANIZATION_MODULE'
const GROUP_MODULE = 'GROUP_MODULE'
const SELLER_MODULE = 'SELLER_MODULE'
const ITEM_MODULE = 'ITEM_MODULE'

export const actionTypes = {
  ORGANIZATION: {
    FETCH: `FETCH_${ORGANIZATION_MODULE}`,
    FETCH_LIST: `FETCH_LIST_${ORGANIZATION_MODULE}`,
    FETCH_STATUS: `FETCH_STATUS_${ORGANIZATION_MODULE}`,
    STORE_NEW: `STORE_NEW_${ORGANIZATION_MODULE}`,
    STORE_DELETE: `STORE_DELETE_${ORGANIZATION_MODULE}`,
    STORE_UPDATE: `STORE_UPDATE_${ORGANIZATION_MODULE}`,
  },
  GROUP: {
    FETCH: `FETCH_${GROUP_MODULE}`,
    FETCH_LIST: `FETCH_LIST_${GROUP_MODULE}`,
    FETCH_STATUS: `FETCH_STATUS_${GROUP_MODULE}`,
    STORE_NEW: `STORE_NEW_${GROUP_MODULE}`,
    STORE_DELETE: `STORE_DELETE_${GROUP_MODULE}`,
    STORE_UPDATE: `STORE_UPDATE_${GROUP_MODULE}`,
  },
  SELLER: {
    FETCH: `FETCH_${SELLER_MODULE}`,
    FETCH_LIST: `FETCH_LIST_${SELLER_MODULE}`,
    FETCH_STATUS: `FETCH_STATUS_${SELLER_MODULE}`,
    STORE_NEW: `STORE_NEW_${SELLER_MODULE}`,
    STORE_DELETE: `STORE_DELETE_${SELLER_MODULE}`,
    STORE_UPDATE: `STORE_UPDATE_${SELLER_MODULE}`,
  },
  ITEM: {
    FETCH: `FETCH_${ITEM_MODULE}`,
    FETCH_LIST: `FETCH_LIST_${ITEM_MODULE}`,
    FETCH_STATUS: `FETCH_STATUS_${ITEM_MODULE}`,
    STORE_NEW: `STORE_NEW_${ITEM_MODULE}`,
    STORE_DELETE: `STORE_DELETE_${ITEM_MODULE}`,
    STORE_UPDATE: `STORE_UPDATE_${ITEM_MODULE}`,
  },
}
