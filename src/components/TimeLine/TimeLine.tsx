import { Timeline } from "@knight-lab/timelinejs";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ParamsData } from "../../types/ParamsData";
import { createTimelineDefinition } from "../../utils/timeline.utils";

export type TimeLineProps = {
  data: ParamsData;
  timelineTitle: string;
};

export const TimeLine: React.FC<TimeLineProps> = ({
  timelineTitle,
  data,
}: TimeLineProps) => {
  // TODO: Get from semantics (`data`)
  const titleSlide = <div />;

  const timelineDefinition = React.useMemo(
    () => createTimelineDefinition(timelineTitle, data),
    [data, timelineTitle],
  );

  const containerId = "timeline-embed";

  React.useEffect(() => {
    // Update the document title using the browser API
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timeline = new Timeline(containerId, timelineDefinition, {
      height: "100%",
      width: "100%",
      source: timelineDefinition,
    });
    requestAnimationFrame(() => {
      ReactDOM.render(
        titleSlide,
        document.getElementById("timeline_title_slide"),
      );
    });
  }, [timelineDefinition, titleSlide]);

  return <div id={containerId} />;
};
