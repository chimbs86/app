import {listitem} from "./listitem";
export class thomson extends listitem{

public static readonly DESCRIPTION = "Was a part of the team to implement priority queues in Open Symphony workflow processes using Java" +

  "Was a part of the team to implement concurrent tasks in order to improve efficiency of the system in Java" +

  "Implemented various tools to monitor workflow processes, using JSF, JSP and DHTML/CSS"+

  "Worked on Technologies like Spring, Hibernate, OS Workflow, JSF";
public static readonly NOTE = "Feb 2009 - Aug 2009";
public static readonly TITLE = "Thomson Reuters";
  constructor() {

    super(thomson.NOTE, thomson.DESCRIPTION, thomson.TITLE,"");

  }
}
