 <script type="text/javascript">
//<![CDATA[
function changeLink() {
    var e = Base64.decode(res);
    window.open(e, "_blank")
}
var currentURL = location.href,
    str = currentURL,
    res = str.replace("http://url-tujuan.blogspot.co.id/p/go.html?url=",
 "");
document.write('<button target="_self" class="btn btn-success 
btn-block redirect" style="display: block;" id="download" 
onclick="changeLink()">Continue</button>');
onload: generate();
//]]>
</script> 