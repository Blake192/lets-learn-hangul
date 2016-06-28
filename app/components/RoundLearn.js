import React from 'react';
import classNames from 'classnames';
import { branch } from 'baobab-react/higher-order';
import Markdown from 'react-remarkable';
import { getRomanizations } from '../utils';
import { continueSession } from '../actions/session';
import { play, isPlaying } from '../sound';
import Image from './Image';
import Circle from './Circle';
import BigWord from './BigWord';
import LearnResponseForm from './LearnResponseForm';

const RoundLearn = ({params, session, shapes, words, actions}) => {
  let {current, response, showCorrect} = session;
  let word = session.words[current];
  let {image, audio, translation, latin} = words[word];

  let hasImage = image && image.url;
  let hasAudio = audio && audio.url;

  let phonetics = word.split('')
    .map(syllable => getRomanizations(syllable).ideal).join(' · ');

  return (
    <div className={classNames('round__learn', {
      'has-image': hasImage,
      'has-audio': hasAudio,
      'show-correct': showCorrect,
    })}>
      <div className={classNames('round__learn__new-word', {
          'long-word': word.length > 3
        })}>
        <Circle className="round__learn__new-word__circle" />
        <label>New word</label>
        <BigWord word={word} shapes={shapes} />
        <div className="round__learn__phonetics">{phonetics}</div>

        { hasImage && (
          <div className="round__learn__image">
            <Image src={image.url} width="420" height="420" />
          </div>
        )}

        { hasAudio && (
          <div
            className="round__learn__audio"
            onClick={() => play(audio.url)} />
        )}
      </div>

      { showCorrect ? (
        <div className="round__learn__correct-word">
          <Circle />
          <label>Correct!</label>
          <h3>{translation}</h3>
          <button
            className="button--green button--forward"
            onClick={actions.continueSession}
            autoFocus data-autofocus="true">
            Next
          </button>
        </div>
      ) : (
        <div className="round__learn__entry">
          <Circle />
          <label>Romanization</label>
          <LearnResponseForm />
        </div>
      )}
    </div>
  );
}

export default branch(RoundLearn, {
  actions: {continueSession, play},
  cursors: {session: ['session']}
});