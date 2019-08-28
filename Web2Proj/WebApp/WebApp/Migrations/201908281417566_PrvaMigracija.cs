namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PrvaMigracija : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Kartas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TipKarte = c.Int(nullable: false),
                        TrajanjeKarte = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Korisniks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Email = c.String(),
                        Ime = c.String(),
                        Prezime = c.String(),
                        Lozinka = c.String(),
                        DatumRodjenja = c.String(),
                        Adresa = c.String(),
                        TipKorisnika = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Linijas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Naziv = c.String(),
                        TipVoznje = c.Int(nullable: false),
                        Aktivan = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Polascis",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LinijaId = c.Int(nullable: false),
                        Vreme = c.String(),
                        TipDana = c.Int(nullable: false),
                        Aktivan = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Linijas", t => t.LinijaId, cascadeDelete: true)
                .Index(t => t.LinijaId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Polascis", "LinijaId", "dbo.Linijas");
            DropIndex("dbo.Polascis", new[] { "LinijaId" });
            DropTable("dbo.Polascis");
            DropTable("dbo.Linijas");
            DropTable("dbo.Korisniks");
            DropTable("dbo.Kartas");
        }
    }
}
