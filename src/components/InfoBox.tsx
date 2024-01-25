import {type ReactNode } from "react";
type hintBoxProp={
  mode:'hint';
  children: ReactNode;
}
type warningBoxProp={
  mode:"warning";
  severity: "low" | 'medium'| 'high'
  children: ReactNode
}
type infoBoxProps = hintBoxProp | warningBoxProp;


export default function InfoBox(props : infoBoxProps) {
  const {mode, children}=props
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p> {children}</p>
      </aside>
    );
  }
  return (<aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
  </aside>)
}
