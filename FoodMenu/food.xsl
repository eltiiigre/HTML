<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">	
	<html>
		<body style="font-family:monospace; font-size:17pt; background-image:url('bg.jpg')">
			<hr/>
			<h1 align="center">Breakfast Menu</h1>
			<hr/>
			<table border="5"  align="center" style= "border-collapse:collapse" width="80%" height="60%">
				<tr bgcolor="peru">
					<th><h3>Name</h3></th>
					<th width="10%"><h3>Price</h3></th>
					<th><h3>Description</h3></th>
					<th width="10%"><h3>Calories</h3></th>
				</tr>
				
				<xsl:for-each select="breakfast_menu/food">
					<tr bgcolor="lemonchiffon">
						<td align="center"><xsl:value-of select="name"/></td>
						<td align="center"><xsl:value-of select="price"/></td>
						<td align="center"><xsl:value-of select="description"/></td>
						<td align="center"><xsl:value-of select="calories"/></td>
					</tr>
            </xsl:for-each>
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>