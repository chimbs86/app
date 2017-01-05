import {listitem} from "./listitem";
export class infodir extends listitem{

  public static readonly DESCRIPTION ="Implemented various Visual Studio Plugins in C# to aid in error reporting"+

    "Was responsible for building an application which helps in understanding Database design using C#"+

    "Was responsible in building an application for upgrading Databases using Data Tier Applications"+

    "Designed an application for migrating to an upgraded database using C# and Microsoft Sync Framework"+

  "Designed various stored procedures for SQL Server 2008";
  public static readonly NOTE = "Feb 2010 - Aug 2010";
  public static readonly TITLE = "Info Directions";
  constructor() {

    super(infodir.NOTE, infodir.DESCRIPTION, infodir.TITLE, "");

  }
}
