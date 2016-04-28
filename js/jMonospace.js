/*********************************************************************************************************
 *         _ __  ___                                           
 *        (_)  |/  /___  ____  ____  _________  ____ _________ 
 *       / / /|_/ / __ \/ __ \/ __ \/ ___/ __ \/ __ `/ ___/ _ \
 *      / / /  / / /_/ / / / / /_/ (__  ) /_/ / /_/ / /__/  __/
 *   __/ /_/  /_/\____/_/ /_/\____/____/ .___/\__,_/\___/\___/ 
 *  /___/                             /_/                      
 *
 * NAME: jMonospace
 * VERSION: 1.0
 * LAST UPDATE: 2016.04.28
 *
 * Author Information:
 *      Name: Richard McMaster
 *      Email: r@kingkode.com
 *      Location: Houston, Texas, United States
 *      Website: http://kingkode.com/jmonospace/
 *      __   _             __             __   
 *     / /__(_)___  ____ _/ /______  ____/ /__ 
 *    / //_/ / __ \/ __ `/ //_/ __ \/ __  / _ \
 *   / ,< / / / / / /_/ / ,< / /_/ / /_/ /  __/
 *  /_/|_/_/_/ /_/\__, /_/|_|\____/\__,_/\___/ 
 *               /____/                        
 *
 * Plugin Website: http://www.github.com/mcmastermind/jmonospace
 *
 * Change Log:
 *      1.0: Initial release
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Description:
 *      jQuery plugin to generate lines of monospaced text with any font
 *
 * Documentation:
 *
 *      Default option:
 *          spacing: 0     Integer: Distance between characters in pixels (can be positive or negative)
 *
 *      Initialization:
 *          Javascript:
 *              $('.jMonospace').jMonospace({ spacing: 1 });
 *          Markup:
 *               <p class="jMonospace">
 *                   [ whatever content to monospace ]
 *               </p>
 *
 *********************************************************************************************************/
 
(function($) 
{
   $.fn.extend(
   {
     jMonospace: function( options ) 
     {
         var defaults = 
         {
            spacing: 0
         }

         var options = $.extend(defaults, options);

         return this.each(function()
         {
            var text = $.trim($(this).text());
            var letters = text.split("");
            var size = parseInt($(this).css('font-size')) - 4;

            for (i in letters)
               letters[i] = '<span style="display:inline-block;overflow:visible;text-align:center;width:' + size + 'px;margin-right:' + options.spacing + 'px;">' + letters[i] + '</span>';  
            var monospaced = letters.join('');
            $(this).html(monospaced);
         });
      }
   });
})(jQuery);
