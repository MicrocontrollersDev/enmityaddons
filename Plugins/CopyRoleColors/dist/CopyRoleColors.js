function h(e){window.enmity.plugins.registerPlugin(e)}var g="CopyRoleColors",b="1.0.0",S="Adds option to copy role color in the User Profile context menu.",f=[{name:"Attic",id:"315852258854174720"},{name:"fiore",id:"396496265430695947"}],F={name:g,version:b,description:S,authors:f};window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const C=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const P=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function v(e){return window.enmity.patcher.create(e)}const m={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function T(...e){return window.enmity.modules.bulk(...e)}window.enmity.modules.common;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const L=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function A(e){return window.enmity.assets.getIDByName(e)}const[I,N,R,k,x,D,B]=T(m.byProps("openLazy","hideActionSheet"),m.byProps("getMember"),m.byProps("getChannel"),m.byProps("getLastSelectedGuildId"),m.byProps("getLastSelectedChannelId"),m.byProps("setString"),m.byProps("showPlatformUserProfile")),t=v("copy-role-colors"),M={...F,onStart(){const e=t.before(I,"openLazy",({hideActionSheet:n},[w,a])=>{a==="UserProfileOverflow"&&w.then(u=>{t.after(u,"default",(U,z,i)=>{var s;const r=i.props.children[1].props.children,d=i.props.children[0].props.leading.props.source.uri.split("/")[4],y=k.getLastSelectedGuildId(),l=x.getChannelId();if(!((s=R.getChannel(l))!=null&&s.guild_id))return;const c=N.getMember(y,d),p=c.colorString===void 0?"#ffffff":c.colorString;r.push(C.createElement(L,{label:"Copy Role Color",onPress:()=>{D.setString(p),P.open({content:"Copied to clipboard",source:A("ic_message_copy")}),n(),B.showPlatformUserProfile({userId:d,channelID:l})}})),i.props.children[1].props.children=r}),e()})})},onStop(){t.unpatchAll()}};h(M);