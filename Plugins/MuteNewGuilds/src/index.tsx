import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import manifest from '../manifest.json';
import { create } from 'enmity/patcher';
import { getByProps } from 'enmity/metro';
import Settings from './settings';
import { get } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import { Dispatcher } from 'enmity/metro/common';

const updateGuildNotificationSettings = getByProps('updateGuildNotificationSettings').updateGuildNotificationSettings;

const Patcher = create('mute-new-guild');

const MuteNewGuilds: Plugin = {
   ...manifest,

   onStart() {
      Patcher.after(Dispatcher, 'dispatch', (_, args, res) => {

         const guildID = args[0]?.invite?.guild?.id;
         updateGuildNotificationSettings(guildID, {
            muted: false,
            suppress_everyone: get('MuteNewGuilds', 'suppress_everyone', false),
            suppress_roles: get('MuteNewGuilds', 'suppress_roles', false),
            mobile_push: get('MuteNewGuilds', 'mobile_push', true)
         });

         return res;
      });
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(MuteNewGuilds);
