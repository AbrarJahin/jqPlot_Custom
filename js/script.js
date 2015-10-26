ohlc_b =
                  [['07/06/2009', 138.7, 139.68, 135.18, 135.4, 'j'],
                  ['06/29/2009', 143.46, 144.66, 139.79, 140.02, 'q'],
                  ['06/22/2009', 140.67, 143.56, 132.88, 142.44, 'p'],
                  ['06/15/2009', 136.01, 139.5, 134.53, 139.48, 'l'],
                  ['06/08/2009', 143.82, 144.56, 136.04, 136.97, 'o'],
                  ['06/01/2009', 136.47, 146.4, 136, 144.67, 't'],
                  ['05/26/2009', 124.76, 135.9, 124.55, 135.81, '_'],
                  ['05/18/2009', 123.73, 129.31, 121.57, 122.5, 'c'],
                  ['05/11/2009', 127.37, 130.96, 119.38, 122.42, 'h'],
                  ['05/04/2009', 128.24, 133.5, 126.26, 129.19, 'a'],
                  ['04/27/2009', 122.9, 127.95, 122.66, 127.24, 'r'],
                  ['04/20/2009', 121.73, 127.2, 118.6, 123.9, 't'],
                  ['04/13/2009', 120.01, 124.25, 115.76, 123.42, 's']
                  ];


$(document).ready(function()
{
    console.log(ohlc_b);
    $.jqplot.config.enablePlugins = true;  

    plot2b = $.jqplot('chart2b',[ohlc_b],
            {
              title: 'Chart',
              axesDefaults:{},
              axes:
              {
                  xaxis:
                  {
                      renderer:$.jqplot.DateAxisRenderer
                  },
                  yaxis:
                  {
                      tickOptions:{ prefix: '$' }
                  }
              },
              series: [{renderer:$.jqplot.OHLCRenderer, rendererOptions:{candleStick:true}}],
              cursor:
              {
                  zoom:false,
                  tooltipOffset: 10,
                  tooltipLocation: 'nw'
              },
              highlighter:
              {
                  showMarker:false,
                  tooltipAxes: 'xy',
                  yvalues: 5,
                  formatString:
                      '<table class="jqplot-highlighter"> \
                      <tr><td>date:</td><td>%s</td></tr> \
                      <tr><td>open:</td><td>%s</td></tr> \
                      <tr><td>hi:</td><td>%s</td></tr> \
                      <tr><td>low:</td><td>%s</td></tr> \
                      <tr><td>close:</td><td>%s</td></tr> \
                      <tr><td>letter:</td><td>%s</td></tr></table>'
              }
            });
});