import defaultTheme from 'windicss/defaultTheme'
import plugin from 'windicss/plugin'

import PluginInteractionVariants from '@windicss/plugin-interaction-variants'
import PluginAspectRatio from 'windicss/plugin/aspect-ratio'
import PluginLineClamp from 'windicss/plugin/line-clamp'

export default {
	darkMode: 'media',
	plugins: [
		PluginInteractionVariants,
		PluginAspectRatio,
		PluginLineClamp,
		plugin( ({ addUtilities }) => 
		{
			addUtilities(
				{
					'.your-mom-is-a-hoe': {
						color: 'pink'
					}
				}
			)
		})
	]
}
