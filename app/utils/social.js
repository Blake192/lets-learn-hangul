import { extend } from 'lodash';
import qs from 'qs';

// TODO: Load per environment
const env = 'local';
const fbAppId = ({
  prod: '145634995501895',
  staging: '1332120460131471',
  local: '1332119800131537',
})[env];
const publicUri = 'http://letslearnhangul.com';

export function getTwitterShareUrl(overrides = {}) {
  let tweet = extend({
    text: 'I just learned to read Korean!',
    url: publicUri,
    hashtags: ['korean', 'hangul', 'hangeul'].join(','),
  }, overrides);

  return `https://twitter.com/intent/tweet?${qs.stringify(tweet)}`;
}

export function getFacebookShareUrl(overrides = {}) {
  let post = extend({
    app_id: fbAppId,
    display: 'page',
    quote: 'I just learned to read Korean!',
    href: publicUri,
    hashtag: '#korean #hangul #hangeul',
    redirect_uri: `${baseUri()}/whatnow`,
  }, overrides);

  return `https://www.facebook.com/dialog/share?${qs.stringify(post)}`;
}

function baseUri() {
  return `${location.protocol}//${location.host}`;
}