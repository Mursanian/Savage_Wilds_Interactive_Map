(this["webpackJsonptw-thrall-map"]=this["webpackJsonptw-thrall-map"]||[]).push([[0],{19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var l,a=n(0),c=n.n(a),o=n(8),i=n.n(o),r=(n(19),n(20),n(10)),s=n(11),d=n(14),u=n(13),h=(n(21),n(4)),j=n(30),b=n(33),O=n(31),m=n(32),f=n(34),v=n(2),x=(n(22),n(1)),S=function(t){return Object(x.jsxs)("div",{className:"thrall-header",onClick:function(){return t.onSelect(t.thrall)},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"thrall-header-name",children:t.thrall.name}),Object(x.jsx)("div",{className:"thrall-header-type",children:t.thrall.type})]}),Object(x.jsx)("div",{style:{marginLeft:"auto",marginRight:"16px"},children:Object(x.jsx)("span",{className:"material-icons",style:{fontSize:"20pt"},children:t.icon})})]})},g=function(t){return Object(x.jsx)(S,{onSelect:t.onSelect,thrall:t.thrall,icon:"chevron_right"})};!function(t){t.ALCHEMIST="ALCHEMIST",t.BLACKSMITH="BLACKSMITH",t.ARMORER="ARMORER",t.CARPENTER="CARPENTER",t.TASKMASTER="TASKMASTER",t.GROOMER="GROOMER",t.SMELTER="SMELTER  "}(l||(l={}));n(24),n(25);var p=function(t){return Object(x.jsxs)("div",{onClick:function(){return t.onSelectLocation(t.location)},className:"thrall-detail-single-location",children:[t.location.x," / ",t.location.y," / ",t.location.z]})},L=function(t){var e;return Object(x.jsxs)("div",{className:"thrall-location-list-container",children:[Object(x.jsx)("div",{className:"thrall-location-list-header",children:"Locations"}),Object(x.jsx)("div",{className:"thrall-location-list-subheader",children:"Click a location to jump to it"}),Object(x.jsx)("div",{className:"thrall-details-locations",children:null===(e=t.thrall)||void 0===e?void 0:e.locations.map((function(e,n){return Object(x.jsx)(p,{onSelectLocation:t.onSelectLocation,location:e},n)}))})]})},T=function(t){var e,n=t.focused?"thrall-details-sliding-in":"thrall-details-sliding-out";return Object(x.jsx)("div",{className:"thrall-details-container "+n,children:Object(x.jsxs)("div",{className:"thrall-details",children:[Object(x.jsx)(S,{thrall:t.thrall||{locations:[],name:"",type:l.ALCHEMIST,id:"ada"},icon:"chevron_left",onSelect:t.onDeSelect}),Object(x.jsx)("div",{className:"thrall-location-description",children:null===(e=t.thrall)||void 0===e?void 0:e.locationDescription}),Object(x.jsx)(L,{thrall:t.thrall,onSelectLocation:t.onSelectLocation})]})})},R=(n(26),function(t){var e=t.selectedThrallFocused?"thrall-list-sliding-out":"thrall-list-sliding-in";return Object(x.jsxs)(c.a.Fragment,{children:[Object(x.jsx)(T,{focused:t.selectedThrallFocused,onSelectLocation:t.onSelectLocation,thrall:t.selectedThrall,onDeSelect:t.onDeselectThrall}),Object(x.jsx)("div",{className:"thrall-list "+e,children:t.thralls.sort((function(t,e){return t.name.localeCompare(e.name)})).map((function(e){return Object(x.jsx)(g,{onSelect:t.onSelectThrall,thrall:e},e.id)}))})]})});function E(t){return{lat:-1*t.y,lng:t.x}}var C=new v.LatLng(-369398,-342934),N=new v.LatLng(444603,475140),w=new v.LatLngBounds(C,N);function M(){var t=Object(j.b)({click:function(t){console.log(t.latlng)},zoom:function(t){console.log(t.target._zoom)},drag:function(){t.panInsideBounds(w,{animate:!1})},locationfound:function(t){console.log("location found:",t)}});return null}function A(t){Object(j.a)().getZoom();var e=t.thrall;return e?e.locations.map((function(t){return function(t,e,n){return Object(x.jsx)(b.a,{radius:500,center:e,children:Object(x.jsx)(O.a,{children:t.name})},e.lat+"_"+e.lng)}(e,E(t))})):Object(x.jsx)(c.a.Fragment,{})}function y(t){var e=Object(j.a)();return t.location&&e.setView(t.location,e.getZoom()),null}function z(t){return null}function F(t){var e=Object(a.useState)(void 0),n=Object(h.a)(e,2),l=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(h.a)(o,2),r=i[0],s=i[1],d=Object(a.useState)(void 0),u=Object(h.a)(d,2),j=u[0],b=u[1],O=Object(a.useState)(-8.7),S=Object(h.a)(O,2),g=S[0],p=S[1];return Object(x.jsxs)("div",{className:"thrall-map-wrapper",children:[Object(x.jsxs)(m.a,{center:[0,0],style:{height:"100vh",width:"calc(100vw - var(--sidebar-width))"},minZoom:-8.7,maxZoom:-4,zoomSnap:.1,zoomDelta:.1,crs:v.CRS.Simple,maxBounds:w,zoomControl:!0,zoom:-8.7,children:[Object(x.jsx)(f.a,{url:"/tw-map/fc_assets/full_map_low_quality.jpg",bounds:w}),Object(x.jsx)(M,{}),Object(x.jsx)(y,{location:j}),Object(x.jsx)(z,{zoom:g}),Object(x.jsx)(A,{thrall:l})]}),Object(x.jsx)("div",{className:"sidebar-right",children:Object(x.jsx)(R,{thralls:t.data,onSelectLocation:function(t){b(E(t)),p(-7)},selectedThrallFocused:r,selectedThrall:l,onDeselectThrall:function(){s(!1),b(void 0)},onSelectThrall:function(t){c(t),s(!0)}})})]})}var k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var l;return Object(r.a)(this,n),(l=e.call(this,t)).state={data:[]},l}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(window.location.href+"/data.json").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(F,{data:this.state.data})})}}]),n}(c.a.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,l=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),l(t),a(t),c(t),o(t)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),D()}},[[27,1,2]]]);
//# sourceMappingURL=main.634445b6.chunk.js.map