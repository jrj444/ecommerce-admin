import * as echarts from "echarts/core";
import {
  TitleComponent,
  TitleComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  DataZoomComponent,
  DataZoomComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from "echarts/components";

import { BarChart, BarSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useRef } from "react";

echarts.use([
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  BarChart,
  UniversalTransition,
  CanvasRenderer,
]);

export type EchartsOption = echarts.ComposeOption<
  | DatasetComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | BarSeriesOption
>;

interface EchartsProps {
  option: EchartsOption;
  width?: number | string;
  height?: number | string;
  loading?: boolean;
}

const Echarts: React.FC<EchartsProps> = ({
  option,
  width = "100%",
  height = "100%",
  loading = false,
}) => {
  const cRef = useRef<HTMLDivElement>(null)
  const cInstance = useRef<echarts.EChartsType>()

  useEffect(() => {
    if (cRef.current) {
      cInstance.current = echarts.getInstanceByDom(cRef.current)
      if (!cInstance.current) {
        cInstance.current = echarts.init(cRef.current, undefined, {
          renderer: 'canvas'
        })
      }
      if (option) {
        cInstance.current?.setOption(option)
      }
    }
  }, [cRef, option])

  return (
    <div ref={cRef} style={{width, height,}}></div>
  )
};

export default Echarts;
